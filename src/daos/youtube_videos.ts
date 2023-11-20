import { useLiveQuery } from "electric-sql/react"
import { useElectric } from "../context"
import getYoutubeId from "get-youtube-id"
import { trpc } from "../trpc"

export function useCreateYoutubeVideo() {
  return async (url) => {
    const id = getYoutubeId(url)
    if (id) {
      await trpc.createVideo.mutate({ id })
    }

    return id
  }
}

export function useVideos() {
  const { db } = useElectric()!

  const { results } = useLiveQuery(
    db.youtube_videos.liveMany({ orderBy: { created_at: `desc` } })
  )

  return results
}

export function useVideo(id) {
  const { db } = useElectric()!

  const { results } = useLiveQuery(
    db.youtube_videos.liveUnique({
      select: {
        title: true,
        author_url: true,
        author_name: true,
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
    db.youtube_llm_outputs.liveMany({
      where: { youtube_id: id },
      orderBy: { created_at: `asc` },
    })
  )

  return [results, summaries, outputs]
}
