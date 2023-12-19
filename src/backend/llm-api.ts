import MistralClient from "@mistralai/mistralai"
export const sdk = require(`api`)(`@pplx/v0#rht322clnm9gt25`)

sdk.auth(process.env.API_KEY)

const apiKey = process.env.MISTRAL_API_KEY
console.log({ apiKey })

export const mistralClient = new MistralClient(apiKey)
