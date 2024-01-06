import { useLiveQuery } from "electric-sql/react"
import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { Electric, schema } from "./generated/client"

type Listener<T> = (value: T) => void

function createElectricRef<T>() {
  let value: T | boolean | undefined
  let listeners: Listener<T | boolean>[] = []

  return {
    get value(): T | boolean | undefined {
      return value
    },
    set value(newValue: T | boolean | undefined) {
      value = newValue
      if (newValue !== undefined) {
        listeners.forEach((listener) => listener(newValue))
      }
    },
    subscribe(listener: Listener<T | boolean>) {
      listeners.push(listener)
      return () => {
        listeners = listeners.filter((l) => l !== listener)
      }
    },
  }
}

export const electricRef = createElectricRef<Electric>()

export async function initElectric(config: any) {
  const tabId = tabIdCoordinator.tabId
  const tabScopedDbName = `${config.appName}-${tabId}.db`
  console.log({ tabScopedDbName })

  const conn = await ElectricDatabase.init(tabScopedDbName, sqliteWasm)
  const electric = await electrify(conn, schema, config)
  electricRef.value = electric

  return electric
}

class TabIdCoordinator {
  heartbeatInterval: number
  inactivityThreshold: number
  tabIDsKey: string
  tabId: number
  uuid: string
  sessionIDKey: string

  constructor() {
    this.heartbeatInterval = 5000 // 5 seconds
    this.inactivityThreshold = 10000 // 10 seconds
    this.tabIDsKey = `tab_ids`
    this.sessionIDKey = `tab_coordinator_id` // Key for storing ID in sessionStorage
    this.uuid = this.generateUUID()
    window.addEventListener(`storage`, this.handleStorageChange.bind(this))
    this.tabId = this.retrieveSessionId() // Attempt to retrieve tabId from sessionStorage
    this.cleanup() // Clean up before assigning tabId
    this.assignTabId()
    this.updateHeartbeat()
    setInterval(() => this.updateHeartbeat(), this.heartbeatInterval)
  }

  generateUUID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  retrieveSessionId() {
    // Retrieve the existing tabId from sessionStorage if it exists
    return parseInt(sessionStorage.getItem(this.sessionIDKey) || ``, 10)
  }

  storeSessionID(tabId) {
    // Store the assigned ID in sessionStorage
    sessionStorage.setItem(this.sessionIDKey, tabId)
  }

  getTabIDs() {
    const ids = JSON.parse(localStorage.getItem(this.tabIDsKey))
    return ids ? ids : {}
  }

  setTabIDs(ids) {
    localStorage.setItem(this.tabIDsKey, JSON.stringify(ids))
  }

  updateHeartbeat() {
    this.cleanup() // Clean up on each heartbeat
    const ids = this.getTabIDs()
    ids[this.uuid] = {
      lastUpdate: Date.now(),
      tabId: ids[this.uuid]?.tabId || this.findLowestAvailableID(ids),
    }
    this.setTabIDs(ids)
  }

  findLowestAvailableID(ids) {
    const usedIds = Object.values(ids).map((entry) => entry.tabId)
    let tabId = 1
    while (usedIds.includes(tabId)) {
      tabId++
    }
    return tabId
  }

  handleStorageChange(event) {
    if (event.key === this.tabIDsKey) {
      const newTabIDs = JSON.parse(event.newValue)
      const currentTabIDs = this.getTabIDs()

      // Check if the data in localStorage has changed
      if (this.isDifferent(newTabIDs, currentTabIDs)) {
        this.cleanup()
        this.assignTabId()
      }
    }
  }

  isDifferent(newData, currentData) {
    // Compare the new data with the current data to see if there's any difference
    const newEntries = Object.entries(newData)
    if (newEntries.length !== Object.entries(currentData).length) {
      return true
    }

    for (const [uuid, data] of newEntries) {
      if (!currentData[uuid] || currentData[uuid].id !== data.id) {
        return true
      }
    }
    return false
  }

  cleanup() {
    const ids = this.getTabIDs()
    const now = Date.now()
    for (const [uuid, data] of Object.entries(ids)) {
      if (now - data.lastUpdate > this.inactivityThreshold) {
        delete ids[uuid]
      }
    }
    this.setTabIDs(ids)
  }

  assignTabId() {
    const ids = this.getTabIDs()
    if (this.tabId) {
      // If the tab has an ID from sessionStorage, reuse it
      ids[this.uuid] = { lastUpdate: Date.now(), tabId: this.tabId }
    } else {
      // If no ID in sessionStorage, find a new ID
      this.tabId = this.findLowestAvailableID(ids)
      ids[this.uuid] = { lastUpdate: Date.now(), tabId: this.tabId }
      this.storeSessionID(this.tabId) // Store the new tabId in sessionStorage
    }
    this.setTabIDs(ids)
  }
}

// Initialize the library
const tabIdCoordinator = new TabIdCoordinator()

type ShapeFunction = (params: { db: Electric[`db`] }) => Array<{
  shape: Promise<any>
  isReady: () => Promise<boolean>
}>

type QueryFunction = () => Promise<any>
type QueriesRecord = (params: {
  db: Electric[`db`]
}) => Record<string, QueryFunction>

// Define everything in loaders w/ a key & then the hook just references that key
const routeCache = new Map()
const queriesMap = new Map()

export async function electricSqlLoader({
  key,
  shapes,
  queries,
}: {
  key: string
  shapes: ShapeFunction
  queries: QueriesRecord
}) {
  console.time(`loading ${key}`)

  // Await for Electric to be active
  await new Promise((resolve) => {
    if (typeof electricRef.value === `undefined`) {
      electricRef.subscribe(() => resolve(null))
    } else {
      resolve(null)
    }
  })

  function isElectric(value: any): value is Electric {
    return value && typeof value === `object` && `db` in value // Adjust the condition based on the actual properties of Electric
  }

  if (!isElectric(electricRef.value)) {
    if (typeof electricRef.value === `boolean`) {
      return
    } else {
      console.log(electricRef.value)
      throw new Error(`electricRef.value is not an instance of Electric`)
    }
  }

  const { db } = electricRef.value

  const resolvedShapes = shapes({ db })

  async function syncTables() {
    const syncPromises = await Promise.all(
      resolvedShapes.map((shape) => shape.shape)
    )
    await Promise.all(syncPromises.map((shape) => shape.synced))
  }

  let isReadies = [false]
  try {
    isReadies = await Promise.all(
      resolvedShapes.map((shape) => shape.isReady())
    )
  } catch (e) {
    console.log(`a isReady failed... so probably it's not ready`, e)
  }

  // Check if all isReadies are true
  if (isReadies.every((isReady) => isReady === true)) {
    // Start syncing but don't block rendering the app on it.
    Promise.resolve().then(() => syncTables())
  } else {
    await syncTables()
  }

  const setupQueries = queries({ db })
  queriesMap.set(key, setupQueries)

  // Run queries
  const promises = Object.entries(setupQueries).map(([_key, func]) => {
    if (typeof func === `function`) {
      return func()
      // I.e. it is a promise from db.raw
    } else {
      return Promise.resolve(func).then((result) => {
        return { result }
      })
    }
  })
  const resolvedPromises = await Promise.all(promises)
  const queryResults = Object.fromEntries(
    resolvedPromises.map((result, i) => [
      Object.keys(setupQueries)[i],
      result.result,
    ])
  )

  routeCache.set(key, queryResults)
  console.timeEnd(`loading ${key}`)
}

export function useElectricData(key) {
  const queriesMapResult: ReturnType<Q> = queriesMap.get(key)

  if (!queriesMapResult) {
    throw new Error(`Queries not found for ${key}.`)
  }

  const cachedResult = routeCache.get(key)

  if (!cachedResult) {
    throw new Error(
      `precached query results not found for ${key}. Check your loader code to make sure it's caching correctly`
    )
  }

  // Call useLiveQuery for each query.
  const results = Object.keys(queriesMapResult).map((key) => {
    const query = queriesMapResult[key]
    let resultsReal
    if (typeof query === `function`) {
      // We're living dangerously.
      // eslint-disable-next-line
      const { results } = useLiveQuery(query)
      resultsReal = results
    } else {
      resultsReal = cachedResult[key]
    }
    return [key, resultsReal]
  })

  // Use cached results until all the live queries
  // have returned results.
  if (results.some((r) => r[1] === undefined)) {
    return cachedResult
  } else {
    return Object.fromEntries(results)
  }
}
