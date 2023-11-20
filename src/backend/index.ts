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

      transact(() => {
        return db.youtube_basic_summary.create({
          data: {
            id: genUUID(),
            youtube_id: input.id,
            created_at: new Date(),
            hour_summaries: JSON.stringify(hourSummaries),
          },
        })
      })
    }),
  genericLLMPrompt: publicProcedure
    .input(
      z.object({
        video_id: z.string(),
        function: z.enum([`cleanupTranscript`, `whyWatchVideo`]),
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

      console.log(`hi`)

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
