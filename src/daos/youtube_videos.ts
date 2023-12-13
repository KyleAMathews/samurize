import { useLiveQuery } from "electric-sql/react"
import { useLocation } from "react-router-dom"
import { useElectric } from "../context"
import getYoutubeId from "get-youtube-id"
import { trpc } from "../trpc"
import { routeCache } from "./cache"

export function useCreateYoutubeVideo() {
  const { db } = useElectric()!
  return async (url) => {
    const id = getYoutubeId(url)
    if (id) {
      // Check if the video exists.
      const videoExists = await db.youtube_videos.findUnique({ where: { id } })
      if (videoExists === null) {
        await trpc.createVideo.mutate({ id })
      }
    } else {
      throw new Error(`Not a valid YouTube URL`)
    }

    return id
  }
}

export const videoQueries = (db, { id }) => {
  return {
    video: db.youtube_videos.liveUnique({
      select: {
        title: true,
        author_url: true,
        author_name: true,
        transcript: true,
        score: true,
      },
      where: { id },
    }),
    summaries: db.youtube_basic_summary.liveMany({
      where: { youtube_id: id },
      orderBy: { created_at: `asc` },
    }),
    outputs: db.liveRaw({
      sql: `SELECT t1.*
FROM youtube_llm_outputs t1
INNER JOIN (
    SELECT llm_prompt_type, MAX(created_at) AS latest
    FROM youtube_llm_outputs
    WHERE youtube_id = ?
    GROUP BY llm_prompt_type
) t2 ON t1.llm_prompt_type = t2.llm_prompt_type AND t1.created_at = t2.latest;`,
      args: [id],
    }),
  }
}

function useCacheOrLiveQueries(queries) {
  const location = useLocation()

  const cachedResult = routeCache.get(location.pathname)

  if (!cachedResult) {
    throw new Error(
      `precached query results not found for ${location.pathname}. Check your loader code to make sure it's caching correctly`
    )
  }

  const results = Object.entries(queries).map(([_, query]) => {
    const { results } = useLiveQuery(query)
    return results
  })

  const resultsByKey = Object.fromEntries(
    results.map((result, i) => [Object.keys(queries)[i], result])
  )

  if (results.some((r) => r === undefined)) {
    return cachedResult
  } else {
    return resultsByKey
  }
}

export function useVideo(id: string) {
  const { db } = useElectric()!
  const queries = videoQueries(db, { id })

  return useCacheOrLiveQueries(queries)
}
