import { useLiveQuery } from "electric-sql/react"
import { useElectric } from "../context"
import getYoutubeId from "get-youtube-id"
import { trpc } from "../trpc"

export function useCreateYoutubeVideo() {
  const { db } = useElectric()!
  return async (url) => {
    const id = getYoutubeId(url)
    if (id) {
      // Check if the video exists.
      const videoExists = await db.youtube_videos.findUnique({ where: { id } })
      if (videoExists === null) {
        await trpc.createVideo.mutate({ id, score: 0 })
      } else {
        return id
      }
    }

    return id
  }
}

export function useVideos() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(
    db.youtube_videos.liveMany({
      select: {
        id: true,
        title: true,
      },
      // orderBy: { created_at: `desc` },
      take: 10,
    })
  )

  return results
}

export function useVideo(id: string) {
  const { db } = useElectric()!

  const { results } = useLiveQuery(
    db.youtube_videos.liveUnique({
      select: {
        title: true,
        author_url: true,
        author_name: true,
        transcript: true,
        score: true,
      },
      where: { id },
    })
  )

  const { results: summaries } = useLiveQuery(
    db.youtube_basic_summary.liveMany({
      where: { youtube_id: id },
      orderBy: { created_at: `asc` },
    })
  )

  const { results: outputs } = useLiveQuery(
    db.liveRaw({
      sql: `SELECT t1.*
FROM youtube_llm_outputs t1
INNER JOIN (
    SELECT llm_prompt_type, MAX(created_at) AS latest
    FROM youtube_llm_outputs
    WHERE youtube_id = ?
    GROUP BY llm_prompt_type
) t2 ON t1.llm_prompt_type = t2.llm_prompt_type AND t1.created_at = t2.latest;`,
      args: [id],
    })
  )

  return [results, summaries, outputs]
}
