import { makeLLMCall } from "./make-llm-call"

export async function createVideoPitch({ summary }) {
  console.log(summary)
  const summaryChunksStr = JSON.parse(
    summary.hour_summaries
  )[0].chunkSummaries.join(`\n\n`)
  const response = await makeLLMCall({
    prompt: `Create a VERY concise pitch (15 words) for watching this video. You are answering the question: "why watch this video?" DO NOT SUMMARIZE!!! Start your response like this: "Watch this video to"`,
    data: summaryChunksStr,
  })

  //          content: `DO NOT SUMMARIZE!!! Explain all acronyms and jargon terms in the entered text, as a markdown list. Use **bold** for the term, then provide an explanation. Mention the likely context for the term where appropriate. If a term could mean several things list each potential definition in a nested list.

  return response.data.choices[0].message.content
}
