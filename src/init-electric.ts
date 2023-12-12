import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite"
import { uniqueTabId } from "electric-sql/util"
import { authToken } from "./auth"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { Electric, schema } from "./generated/client"

class PromiseTracker {
  private promises: Map<string, Promise<any>>
  private waitingResolvers: Map<string, (p: Promise<any> | true) => void>

  constructor() {
    this.promises = new Map()
    this.waitingResolvers = new Map()
  }

  addPromise(key: string, promise: Promise<any>): void {
    this.promises.set(key, promise)

    promise.then(() => {
      if (this.waitingResolvers.has(key)) {
        this.waitingResolvers.get(key)(true)
        this.waitingResolvers.delete(key)
      }
    })

    if (this.waitingResolvers.has(key)) {
      this.waitingResolvers.get(key)(promise)
      this.waitingResolvers.delete(key)
    }
  }

  checkPromise(key: string): Promise<true | Promise<any>> {
    if (this.promises.has(key)) {
      const promise = this.promises.get(key)
      return Promise.resolve(promise)
    } else {
      return new Promise((resolve) => {
        this.waitingResolvers.set(key, resolve)
      })
    }
  }
}

const tracker = new PromiseTracker()

declare const ELECTRIC_URL: string
const electricUrl =
  typeof ELECTRIC_URL === `undefined`
    ? `ws://localhost:5133`
    : `wss://${ELECTRIC_URL}`

async function syncTables(electric) {
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

    tracker.addPromise(`trpc_calls`, shape1.synced)
    tracker.addPromise(`youtube_videos`, shape2.synced)
    tracker.addPromise(`youtube_basic_summary`, shape3.synced)
    tracker.addPromise(`youtube_llm_outputs`, shape4.synced)

    await Promise.all([
      shape1.synced,
      shape2.synced,
      shape3.synced,
      shape4.synced,
    ])

    console.timeEnd(`sync`)
  } catch (error) {
    console.log(`initial electric sync failed`, error)
  }
}

export async function initElectric() {
  const token = authToken()
  const config = {
    auth: {
      token: token,
    },
    debug: false, //DEBUG_MODE,
    url: electricUrl,
  }

  console.time(`sync`)
  const { tabId } = uniqueTabId()
  const tabScopedDbName = `electric-${tabId}.db`

  const conn = await ElectricDatabase.init(tabScopedDbName, sqliteWasm)
  const electric = await electrify(conn, schema, config)
  let isTable = false
  // Try querying to see if the table we want exists already. If it does,
  // we don't need to wait for syncing to do the initial render.
  try {
    await electric.db.trpc_calls.findMany()
    isTable = true
  } catch (e) {
    // Nothing to do
  }

  if (isTable) {
    // Start syncing but don't block rendering the app on it.
    Promise.resolve().then(() => syncTables(electric))
  } else {
    await syncTables(electric)
  }

  return electric
}

export async function areTablesSynced(tables: string[]) {
  return Promise.all(tables.map((table) => tracker.checkPromise(table)))
}
