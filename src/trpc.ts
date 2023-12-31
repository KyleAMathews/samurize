import type { AppRouter } from "./backend"
import { link, createElectricRef } from "trpc-electric-sql/link"
import { createTRPCProxyClient, loggerLink } from "@trpc/client"
// import { Electric } from "../src/generated/client"
import { electricRef } from "./electric-routes"
import { genUUID } from "electric-sql/util"

// export const electricRef = createElectricRef<Electric>()

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink(),
    link({
      electricRef,
      clientId: genUUID(),
    }),
  ],
})

window.trpc = trpc
