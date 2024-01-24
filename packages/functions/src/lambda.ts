import { ApiHandler } from "sst/node/api"
import { Config } from "sst/node/config"
import { YoutubeTranscript } from "youtube-transcript"
const youtube = require(`youtube-metadata-from-url`)
const { Client } = require(`pg`)
import { chunk } from "../../../src/utils/chunk-transcript"
import { summarizeChunks } from "../../../src/backend/basic-summary"
import { createVideoPitch } from "../../../src/backend/why-watch-video"
import { genUUID } from "electric-sql/util"

console.log(Config.DATABASE_URL)

export const handler = ApiHandler(async (_evt) => {
  const sql = new Client(Config.DATABASE_URL!)
  try {
    await sql.connect()
  } catch (e) {
    console.log(e)
  }
  const videoId = _evt.queryStringParameters.videoId
  console.log({ videoId })
  console.log(`IS_LOCAL?`, process.env.IS_LOCAL)
  // query for video to see if already exists
  const { rows } = await sql.query(
    `SELECT * FROM youtube_videos WHERE id =$1`,
    [videoId]
  )
  console.log({ rows })
  if (!rows[0]) {
    // if (true) {
    try {
      const metadataPromise = youtube
        .metadata(`https://www.youtube.com/watch?v=${videoId}`)
        .then((metadata) => {
          if (!rows[0]) {
            const query = `
        INSERT INTO youtube_videos (
            id,
            transcript,
            created_at,
            updated_at,
            title,
            author_name,
            author_url,
            type,
            height,
            width,
            version,
            provider_name,
            provider_url,
            thumbnail_height,
            thumbnail_width,
            thumbnail_url,
            html,
            score
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
        RETURNING *;`

            const values = [
              videoId,
              ``,
              // transcript,
              new Date().toJSON(),
              new Date().toJSON(),
              metadata.title,
              metadata.author_name,
              metadata.author_url,
              metadata.type,
              metadata.height,
              metadata.width,
              metadata.version,
              metadata.provider_name,
              metadata.provider_url,
              metadata.thumbnail_height,
              metadata.thumbnail_width,
              metadata.thumbnail_url,
              metadata.html,
              0.1,
            ]

            return sql.query(query, values)
          }
        })
        .catch((e) => {
          throw e
        })
        .then(() => console.log(`original insert to youtube_videos is done`))

      const transcript = await YoutubeTranscript.fetchTranscript(videoId)

      await Promise.resolve(metadataPromise)

      // Update video with the transcript
      const query = `
        UPDATE youtube_videos
        SET transcript = $2, updated_at = NOW()
        WHERE id = $1;`

      const values = [videoId, JSON.stringify(transcript)]

      sql
        .query(query, values)
        .catch((e) => {
          console.log(e)
        })
        .then(() => console.log(`transcript is written`))

      let progress = 0.1
      function updateProgress({
        increment,
        value,
      }: {
        increment?: number
        value?: number
      }) {
        if (increment) {
          progress = progress + increment
        } else {
          progress = value
        }
        const query = `
        UPDATE youtube_videos
        SET score = $2, updated_at = NOW()
        WHERE id = $1;`

        const values = [videoId, progress]

        return sql.query(query, values).catch((e) => {
          console.log(e)
        })
      }

      const chunks = chunk(transcript, true)
      console.log(`chunks length`, chunks.length)
      const hourSummaries = await summarizeChunks(chunks, updateProgress)
      updateProgress({ value: 0.9 })

      // TODO for speed, could refactor this call to be done in parallel with the
      // whole video summary call.
      const response = await createVideoPitch({
        summary: { hour_summaries: JSON.stringify(hourSummaries) },
      })

      console.log(response)

      function insertWhyWatchVideo() {
        const query = `
        INSERT INTO youtube_llm_outputs (id, youtube_id, created_at, llm_prompt_type, output)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;`

        const values = [
          genUUID(),
          videoId,
          new Date().toJSON(),
          `whyWatchVideo`,
          JSON.stringify(response),
        ]

        return sql.query(query, values)
      }

      const insertYoutubeBasicSummary = () => {
        const query = `
        INSERT INTO youtube_basic_summary (id, youtube_id, created_at, hour_summaries)
        VALUES ($1, $2, $3, $4)
        RETURNING *;`

        const values = [
          genUUID(),
          videoId,
          new Date().toJSON(),
          JSON.stringify(hourSummaries),
        ]

        return sql.query(query, values)
      }

      await Promise.all([
        insertWhyWatchVideo()
          .then(() => console.log(`insertWhyWatchVideo done`))
          .catch((e) => {
            console.log(`insertWhyWatchVideo failed`, e)
          }),
        insertYoutubeBasicSummary()
          .then(() => console.log(`insertYoutubeBasicSummary done`))
          .catch((e) => {
            console.log(`insertYoutubeBasicSummary failed`, e)
          }),
      ])

      // Set done
      await updateProgress({ value: 1 })

      console.log(`done`)
    } catch (e) {
      console.log(e)
      return {
        statusCode: 500,
        body: e.message,
      }
    }
  }

  return {
    statusCode: 200,
    body: `done`,
  }
})
