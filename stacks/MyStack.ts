import { Config, StackContext, Api } from "sst/constructs"

export function API({ stack }: StackContext) {
  const API_KEY_SECRET = new Config.Secret(stack, `API_KEY`)
  const DATABASE_URL_SECRET = new Config.Secret(stack, `DATABASE_URL`)

  const api = new Api(stack, `api`, {
    defaults: {
      function: {
        bind: [API_KEY_SECRET, DATABASE_URL_SECRET],
      },
    },
    routes: {
      "GET /": {
        function: {
          handler: `packages/functions/src/lambda.handler`,
          timeout: 600,
        },
      },
    },
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
  })
}
