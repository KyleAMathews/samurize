import { LIB_VERSION } from "electric-sql/version"
import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite"
import { uniqueTabId } from "electric-sql/util"
import { authToken } from "./auth"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { Electric, schema } from "./generated/client"
import { tracer } from "./utils/tracer"

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
const { tabId } = uniqueTabId()
const dbName = `samurizer-${LIB_VERSION}-${tabId}.db`

declare const ELECTRIC_URL: string
const electricUrl =
  typeof ELECTRIC_URL === `undefined`
    ? `ws://localhost:5133`
    : `wss://${ELECTRIC_URL}`

console.log({ electricUrl })

function deleteDB() {
  console.log(`Deleting DB as schema doesn't match server's`)
  const DBDeleteRequest = window.indexedDB.deleteDatabase(dbName)
  DBDeleteRequest.onsuccess = function () {
    console.log(`Database deleted successfully`)
  }
  // the indexedDB cannot be deleted if the database connection is still open,
  // so we need to reload the page to close any open connections.
  // On reload, the database will be recreated.
  window.location.reload()
}

async function syncTables(electric) {
  await tracer.startActiveSpan(`syncTables`, {}, async (span) => {
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
      span.end()
    } catch (error) {
      console.log(`initial electric sync failed`, error)
      deleteDB()
    }
  })
}

export async function initElectric(electricRef) {
  const token = authToken()
  const config = {
    auth: {
      token: token,
    },
    debug: false, //DEBUG_MODE,
    url: electricUrl,
  }

  console.time(`sync`)

  const conn = await ElectricDatabase.init(dbName, sqliteWasm)
  const electric = await electrify(conn, schema, config)
  electricRef.value = electric

  // Start syncing but don't block rendering the app on it.
  Promise.resolve().then(() => syncTables(electric))

  return electric
}

export async function areTablesSynced(tables: string[]) {
  return Promise.all(tables.map((table) => tracker.checkPromise(table)))
}
