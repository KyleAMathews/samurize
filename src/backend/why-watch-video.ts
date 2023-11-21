import { makeLLMCall } from "./make-llm-call"

export async function createVideoPitch({ summary }) {
  console.log(summary)
  const summaryChunksStr = JSON.parse(
    summary.hour_summaries
  )[0].chunkSummaries.join(`\n\n`)
  const response = await makeLLMCall({
    // prompt: `Create a VERY concise pitch (15 words) for watching this video. You are answering the question: "why watch this video?" DO NOT SUMMARIZE!!! Start your response like this: "Watch this video to"`,
    prompt: `Create a VERY concise pitch (15 words or one sentence) for watching this video. You are answering the question: "why should I be excited to watch this video?" DO NOT SUMMARIZE!!! Start your response like this: "Watch this video to"`,
    data: summaryChunksStr,
  })

  return response.data.choices[0].message.content
}
