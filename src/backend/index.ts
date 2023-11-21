import { initTRPC, TRPCError } from "@trpc/server"
import { z } from "zod"
import Database from "better-sqlite3"
const { electrify } = require(`electric-sql/node`)
const { authToken } = require(`../auth`)
const { schema } = require(`../generated/client`)
import { adapter } from "trpc-electric-sql/adapter"
import { chunk } from "../utils/chunk-transcript"
import { summarizeChunks } from "./basic-summary"
import { genUUID } from "electric-sql/util"
import { getTranscriptAndMetadata } from "./youtube-info"
import { cleanupTranscript } from "./cleanup-transcript"
import { createVideoPitch } from "./why-watch-video"
import { promptPlayground } from "./prompt-playground"

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create()
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
const router = t.router
const publicProcedure = t.procedure

export const appRouter = router({
  ping: publicProcedure.mutation(async () => {
    console.log(`got pinged.`)
    return `pong`
  }),
  createVideo: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      const {
        input,
        ctx: {
          transact,
          electric: { db },
        },
      } = opts

      let info = {}
      try {
        info = await getTranscriptAndMetadata(input.id)
      } catch (e) {
        console.log(e)
        throw new TRPCError({ error: e })
      }
      info.transcript = JSON.stringify(info.transcript)

      transact(() => {
        return db.youtube_videos.create({
          data: {
            id: input.id,
            created_at: new Date(),
            updated_at: new Date(),
            ...info,
          },
        })
      })
    }),
  youtubeBasicSummary: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      const {
        input,
        ctx: {
          transact,
          electric: { db },
        },
      } = opts

      const video = await db.youtube_videos.findUnique({
        where: { id: input.id },
      })

      const chunks = chunk(JSON.parse(video.transcript), true)
      console.log(`chunks length`, chunks.length)
      const hourSummaries = await summarizeChunks(chunks)
      // TODO for speed, could refactor this call to be done in parallel with the
      // whole video summary call.
      const response = await createVideoPitch({
        summary: { hour_summaries: JSON.stringify(hourSummaries) },
      })

      transact(() => {
        Promise.all([
          db.youtube_llm_outputs.create({
            data: {
              id: genUUID(),
              youtube_id: input.id,
              created_at: new Date(),
              llm_prompt_type: `whyWatchVideo`,
              output: JSON.stringify(response),
            },
          }),
          db.youtube_basic_summary.create({
            data: {
              id: genUUID(),
              youtube_id: input.id,
              created_at: new Date(),
              hour_summaries: JSON.stringify(hourSummaries),
            },
          }),
        ])
      })
    }),
  genericLLMPrompt: publicProcedure
    .input(
      z.object({
        video_id: z.string(),
        prompt: z.string().optional(),
        function: z.enum([
          `cleanupTranscript`,
          `whyWatchVideo`,
          `promptPlayground`,
        ]),
      })
    )
    .mutation(async (opts) => {
      const {
        input,
        ctx: {
          transact,
          electric: { db },
        },
      } = opts

      const video = await db.youtube_videos.findUnique({
        where: { id: input.video_id },
      })
      const summary = await db.youtube_basic_summary.findMany({
        where: { youtube_id: input.video_id },
        orderBy: { created_at: `asc` },
        take: 1,
      })

      console.log(video)

      let response: string = ``
      if (input.function === `cleanupTranscript`) {
        response = await cleanupTranscript({ video })
      } else if (input.function === `whyWatchVideo`) {
        response = await createVideoPitch({ summary: summary[0] })
      } else if (input.function === `promptPlayground`) {
        response = await promptPlayground({
          prompt: input.prompt,
          summary: summary[0],
        })
      }

      transact(() => {
        return db.youtube_llm_outputs.create({
          data: {
            id: genUUID(),
            youtube_id: input.video_id,
            created_at: new Date(),
            llm_prompt_type: input.function,
            output: JSON.stringify(response),
          },
        })
      })
    }),
  promptPlayground: publicProcedure
    .input(
      z.object({
        prompt: z.string().optional(),
      })
    )
    .mutation(async (opts) => {
      const {
        input,
        ctx: {
          transact,
          electric: { db },
        },
      } = opts

      console.time(`query`)
      const videos = await db.raw({
        sql: `SELECT * FROM youtube_videos ORDER BY RANDOM() LIMIT 10`,
      })
      console.log(videos.length, videos[0].title)
      console.log(videos.map((v) => v.title))
      const summaries = await Promise.all(
        videos.map((video) =>
          db.youtube_basic_summary.findMany({
            where: { youtube_id: video.id },
            orderBy: { created_at: `asc` },
            take: 1,
          })
        )
      )
      console.timeEnd(`query`)

      const responses = await Promise.all(
        summaries.map((summary) =>
          promptPlayground({
            prompt: input.prompt,
            summary: summary[0],
          })
        )
      )

      return responses
    }),
})

export type AppRouter = typeof appRouter

async function setupTRPC() {
  const config = {
    auth: {
      token: authToken(),
    },
    // debug: true,
    // url: ELECTRIC_URL,
  }

  // Create the better-sqlite3 database connection.
  const conn = new Database(`local-data.db`)
  conn.pragma(`journal_mode = WAL`)

  // Instantiate your electric client.
  console.time(`initial sync from electric-sql.`)
  const electric = await electrify(conn, schema, config)
  const { db } = electric
  const [shape, shape2, shape3] = await Promise.all([
    db.trpc_calls.sync(),
    db.youtube_videos.sync(),
    db.youtube_basic_summary.sync({ include: { youtube_videos: true } }),
  ])
  await Promise.all([shape.synced, shape2.synced, shape3.synced])
  console.timeEnd(`initial sync from electric-sql.`)

  adapter({
    context: {
      electric,
      instanceName: `server`,
    },
    appRouter,
    onError: (e) => console.log(e),
  })

  console.log(`trpc server is now listening`)
}

setupTRPC()
