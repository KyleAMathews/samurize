export const routeCache = new Map()
export async function transformQueriesObject(obj) {
  const promises = Object.entries(obj).map(([_key, func]) => func())
  const results = await Promise.all(promises)
  return Object.fromEntries(
    results.map((result, i) => [Object.keys(obj)[i], result.result])
  )
}
