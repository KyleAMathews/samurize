import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite"
import { uniqueTabId } from "electric-sql/util"
import { authToken } from "./auth"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { Electric, schema } from "./generated/client"

export default async function initElectric() {
  const token = authToken()
  const config = {
    auth: {
      token: token,
    },
    debug: false, //DEBUG_MODE,
    // url: ELECTRIC_URL,
  }

  console.time(`sync`)
  const { tabId } = uniqueTabId()
  const tabScopedDbName = `electric-${tabId}.db`

  const conn = await ElectricDatabase.init(tabScopedDbName, sqliteWasm)
  const electric = await electrify(conn, schema, config)

  // Start syncing but don't block rendering the app on it.
  new Promise(async () => {
    try {
      const [shape1, shape2, shape3, shape4] = await Promise.all([
        electric.db.trpc_calls.sync(),
        electric.db.youtube_videos.sync(),
        electric.db.youtube_basic_summary.sync({
          include: {
            youtube_videos: true,
          },
        }),
        electric.db.youtube_llm_outputs.sync({
          include: {
            youtube_videos: true,
          },
        }),
      ])
      await Promise.all([shape1.synced, shape2.synced, shape3.synced, shape4])

      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.timeEnd(`sync`)
    } catch (error) {
      console.log(`initial electric sync failed`, error)
    }
  })

  return electric
}
