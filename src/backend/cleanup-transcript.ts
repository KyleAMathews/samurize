import { makeLLMCall } from "./make-llm-call"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 4300,
  chunkOverlap: 0,
})

export async function cleanupTranscript({ video }) {
  const transcriptAsString = JSON.parse(video.transcript)
    .map((t) => t.text)
    .join(` `)
  const output = (await splitter.createDocuments([transcriptAsString])).map(
    (p) => p.pageContent
  )

  const responses = await Promise.all(
    output.map(async (transcriptChunk) => {
      const response = await makeLLMCall({
        prompt: `Reformat this transcript into paragraphs and sentences, fix the capitalization and make very light edits such as removing ums`,
        data: transcriptChunk,
      })

      return response.data.choices[0].message.content
    })
  )

  return responses.join(`\n\n`)
}
