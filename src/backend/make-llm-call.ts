import { sdk } from "./llm-api"

export function makeLLMCall({
  prompt,
  data,
}: {
  prompt: string
  data: string
}) {
  return sdk.post_chat_completions({
    model: `openhermes-2-mistral-7b`,
    messages: [
      {
        role: `system`,
        content: prompt,
      },
      {
        role: `user`,
        content: data,
      },
    ],
  })
}
