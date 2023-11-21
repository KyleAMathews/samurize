import { useLiveQuery } from "electric-sql/react"
import { useElectric } from "../context"

export function usePromptPlaygroundTrpcCalls() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(
    db.trpc_calls.liveMany({
      orderBy: { createdat: `desc` },
      where: {
        path: `promptPlayground`,
        state: `DONE`,
        response: { not: `null` },
      },
    })
  )

  return results
}
