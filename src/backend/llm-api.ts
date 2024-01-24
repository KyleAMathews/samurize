import MistralClient from "@mistralai/mistralai"
import { Config } from "sst/node/config"
export const sdk = require(`api`)(`@pplx/v0#rht322clnm9gt25`)

sdk.auth(Config.API_KEY)

const apiKey = process.env.MISTRAL_API_KEY

export const mistralClient = new MistralClient(apiKey)
