import { sdk, mistralClient } from "./llm-api"

export async function makeLLMCall({
  messages,
  model,
}: {
  model?: string
  messages: Array<any>
}) {
  // const response = await mistralClient.chat({
  // model: `mistral-medium`,
  // messages,
  // })
  // console.log(`got response from mistral`)

  // return { data: response }
  return sdk.post_chat_completions({
    // model: `openhermes-2-mistral-7b`,
    // model: `mistral-7b-instruct`,
    model: model || `mixtral-8x7b-instruct`,
    // model: `pplx-7b-chat`,
    messages,
  })
}
