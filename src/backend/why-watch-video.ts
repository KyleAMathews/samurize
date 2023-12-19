import { makeLLMCall } from "./make-llm-call"

export async function createVideoPitch({ summary }) {
  const summaryChunksStr = JSON.parse(
    summary.hour_summaries
  )[0].chunkSummaries.join(`\n\n`)
  const response = await makeLLMCall({
    messages: [
      {
        role: `system`,
        // prompt: `Create a VERY concise pitch (15 words) for watching this video. You are answering the question: "why watch this video?" DO NOT SUMMARIZE!!! Start your response like this: "Watch this video to"`,
        content: `Create a one sentence pitch for watching this video. Do not include very many details or entities at all (or my boss will be really mad at me and I'll lose my job). Use only 15-20 words in ONLY one sentence. The pitch should be a high-level gloss on the video and help the user understand if it's the right audience for the video. Start your response like this: Watch this video to`,
      },
      {
        role: `user`,
        content: summaryChunksStr,
      },
    ],
  })

  return response.data.choices[0].message.content
}
