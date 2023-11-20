import { groupBy, cloneDeep } from "lodash"

export function chunk(transcript, addOverlap: true) {
  const chunks = Object.values(
    groupBy(transcript, (segment) =>
      Math.floor(segment.offset / (1000 * 60 * 5))
    )
  )

  // Merge small final chunks back into the second to last one.
  // if (chunks.slice(-1)[0].length < 8) {
  // chunks[chunks.length - 2] = [
  // ...chunks[chunks.length - 2],
  // ...chunks[chunks.length - 1],
  // ]
  // chunks = chunks.slice(0, -1)
  // }

  if (addOverlap && chunks.length > 1) {
    function addFromNext(chunks, i) {
      return chunks[i].concat(chunks[i + 1].slice(0, 8))
    }
    function addFromPrevious(chunks, i) {
      return chunks[i].concat(chunks[i - 1].slice(-8, chunks[i - 1].length))
    }
    const beforeOverlap = cloneDeep(chunks)
    chunks.forEach((_chunk, i) => {
      if (i === 0) {
        chunks[i] = addFromNext(beforeOverlap, i)
      } else if (i === chunks.length - 1) {
        chunks[i] = addFromPrevious(beforeOverlap, i)
      } else {
        chunks[i] = addFromPrevious(beforeOverlap, i)
        chunks[i] = addFromNext(beforeOverlap, i)
      }
    })
  }

  return chunks.map((group) => group.map((t) => t.text).join(` `))
}
