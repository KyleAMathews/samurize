import { makeLLMCall } from "./make-llm-call"

export async function promptPlayground({ prompt, summary }) {
  if (!summary) {
    return ``
  }
  const summaryChunksStr = JSON.parse(
    summary.hour_summaries
  )[0].chunkSummaries.join(`\n\n`)
  const response = await makeLLMCall({
    prompt,
    data: summaryChunksStr,
  })

  //          content: `DO NOT SUMMARIjkkZE!!! Explain all acronyms and jargon terms in the entered text, as a markdown list. Use **bold** for the term, then provide an explanation. Mention the likely context for the term where appropriate. If a term could mean several things list each potential definition in a nested list.

  return response.data.choices[0].message.content
}
