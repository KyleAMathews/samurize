import { describe, it, expect } from "vitest"

import { getTranscriptAndMetadata } from "./src/backend/youtube-info"
import { chunk } from "./src/utils/chunk-transcript"
import { summarizeChunks } from "./src/backend/basic-summary"
import { cleanupTranscript } from "./src/backend/cleanup-transcript"
import { createVideoPitch } from "./src/backend/why-watch-video"

describe(`youtube-info`, () => {
  it(`gets the transcript and metadata for videos`, async () => {
    const info = await getTranscriptAndMetadata(`4wHmo5-OvwQ`)
    // console.log(info)
    expect(info.title).toBeDefined()
    expect(info.width).toBeDefined()
    expect(info.transcript).toBeDefined()
    expect(info.transcript.length).toBeGreaterThan(0)
  })
})

describe(`chunking transcript`, () => {
  it(`returns good chunks`, () => {
    const transcript = require(`./mocks/transcript.json`)
    const chunks = chunk(transcript, true)
    expect(chunks).toHaveLength(4)
  })
})

describe(`basic-summary`, () => {
  it(`returns good summaries`, async () => {
    const transcript = require(`./mocks/transcript.json`)
    const chunks = chunk(transcript, true)
    const summaries = await summarizeChunks(chunks)
    // require(`fs`).writeFileSync(`mocks/summary.json`, JSON.stringify(summaries, null, 4))
    expect(summaries).toHaveLength(1)
    const summary = summaries[0]
    expect(summary.summary).toBeDefined()
    expect(summary.summary.length).toBeGreaterThan(100)
    expect(summary.chunkSummaries).toHaveLength(4)
  })
})

describe(`cleanup-transcript`, () => {
  it(`returns good transcripts`, async () => {
    const transcript = require(`./mocks/transcript.json`)
    const cleanTranscript = await cleanupTranscript({
      video: { transcript: JSON.stringify(transcript) },
    })
    expect(cleanTranscript.length).toBeGreaterThan(2000)
  }, 10000)
})

describe(`why watch this video?`, () => {
  it(`returns good pitches`, async () => {
    const summary = require(`./mocks/summary.json`)
    const pitch = await createVideoPitch(summary)
    console.log(pitch)
    expect(pitch.length).toBeLessThan(400)
  })
})
