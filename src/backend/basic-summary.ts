import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import { makeLLMCall } from "./make-llm-call"
import { sdk } from "./llm-api"

async function summarizeChunk(chunk, i, progressAmount) {
  let response
  try {
    response = await sdk.post_chat_completions({
      model: `openhermes-2-mistral-7b`,
      messages: [
        {
          role: `system`,
          content: `You produce dense summaries of articles and transcripts.`,
        },
        {
          role: `user`,
          content: `summarize this section of a talk transcript (this is NOT the entire talk so don't use words like "start" or "conclude" in the summary as the end of this transcript isn't the end of the talk). The summary should be readable on its own but it'll also be used with other summaries of the talk to create an overall summary of the talk so be sure to include all information you need to summarize the talk as a whole. This is important to my career. Start the summary by saying: "This section of the video"\n\n${chunk}`,
        },
      ],
    })
  } catch (e) {
    console.log(`chunk summary failed`, e)
  }

  console.log(`finished summary`, i)

  return response.data.choices[0].message.content
}

async function reduceChunks(chunks) {
  let response
  try {
    response = await sdk.post_chat_completions({
      model: `openhermes-2-mistral-7b`,
      messages: [
        {
          role: `system`,
          content: `You produce dense summaries of articles and transcripts.`,
        },
        {
          role: `user`,
          content: `The following is a linear set of summaries of portions of a transcript. Take information equally from each to create a cohesive summary of the transcript as a whole. This is important to my career. Start the summary by saying "The video"\n\n ${chunks.join(
            `\n\n`
          )}`,
        },
      ],
    })
  } catch (e) {
    console.log(`error in final summary`, e)
  }

  return response.data.choices[0].message.content
}

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 4000,
  chunkOverlap: 200,
})

function chunkArray(array, size) {
  const chunked = []
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size))
  }
  return chunked
}

interface HourSummary {
  summary: string
  chunkSummaries: string[]
}

export async function summarizeChunks(allChunks) {
  const summaries: HourSummary[] = []

  const size = 60 / 5
  // Split into 1 hour segments.
  const chunkedArray = chunkArray(allChunks, size)

  const numAPICalls =
    chunkedArray.reduce((acc, chunks) => (acc += chunks.length), 0) +
    chunkedArray.length

  console.log(`chunkedArray`, chunkedArray.length)

  await Promise.all(
    chunkedArray.map(async (chunks, i) => {
      const hourSummary: HourSummary = { summary: ``, chunkSummaries: [] }
      console.log(`chunk summary`, i)
      try {
        hourSummary.chunkSummaries = await Promise.all(
          chunks.map((chunk, i) => summarizeChunk(chunk, i, 1 / numAPICalls))
        )
      } catch (e) {
        console.log(e)
      }

      const numTokens = hourSummary.chunkSummaries.join(` `).length / 1 / Math.E
      console.log(
        `chunk summaries done, starting final summary of ~${numTokens} tokens`
      )

      let response
      if (numTokens < 4000) {
        response = await reduceChunks(hourSummary.chunkSummaries)
      } else {
        // summarize the chunk summaries to shrink down chunked summaries enough
        // to create the final summary.
        const output = (
          await splitter.createDocuments([
            hourSumary.chunkSummaries.join(`\n\n`),
          ])
        ).map((p) => p.pageContent)
        let smallerSummaries
        try {
          smallerSummaries = await Promise.all(
            output.map((chunk, i) => summarizeChunk(chunk, i, 1 / numAPICalls))
          )
        } catch (e) {
          console.log(e)
        }
        const numTokens = smallerSummaries.join(` `).length / 1 / Math.E
        console.log(
          `2nd chunk summaries done, starting final summary of ~${numTokens} tokens`
        )
        response = await reduceChunks(smallerSummaries)
      }

      hourSummary.summary = response
      summaries.push(hourSummary)
    })
  )

  console.log(`summary is done`)
  return summaries
}
