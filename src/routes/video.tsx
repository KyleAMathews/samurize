import { useParams } from "react-router-dom"
import { useLiveQuery } from "electric-sql/react"
import { useElectric } from "../context"
import { useVideo } from "../daos/youtube_videos"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import MLink from "@mui/material/Link"
import Button from "@mui/material/Button"
import { trpc } from "../trpc"
import { Markdown } from "../components/markdown"

function Summary({ hourSummaries }) {
  console.log(hourSummaries)
  return hourSummaries.map((hour, i) => (
    <Typography key={i} variant="p">
      {hour.summary}
    </Typography>
  ))
}

export default function Video() {
  const { videoId } = useParams()
  const [video, summaries, outputs] = useVideo(videoId)
  console.log({ video, outputs })

  if (video === undefined || summaries === undefined) {
    return null
  }

  console.log({ summaries })
  return (
    <Stack>
      <Typography variant="h2" mb={1}>
        {video.title}
      </Typography>
      <MLink mb={2} href={video.author_url}>
        {video.author_name}
      </MLink>
      {summaries && summaries.slice(-1)[0]?.hour_summaries && (
        <Stack>
          <Typography variant="h3" mb={1}>
            Summary
          </Typography>
          <Summary
            hourSummaries={JSON.parse(summaries.slice(-1)[0].hour_summaries)}
          />
        </Stack>
      )}
      <Button
        onClick={() => {
          trpc.genericLLMPrompt.mutate({
            video_id: videoId,
            function: `cleanupTranscript`,
          })
        }}
      >
        Cleanup Transcript
      </Button>
      <Button
        onClick={() => {
          trpc.genericLLMPrompt.mutate({
            video_id: videoId,
            function: `whyWatchVideo`,
          })
        }}
      >
        Why Watch Video?
      </Button>
      {outputs &&
        outputs.map((output) => {
          if (output.llm_prompt_type === `whyWatchVideo`) {
            return (
              <Stack mb={1}>
                <Typography variant="h3" mb={1}>
                  Why Watch Video
                </Typography>
                <Markdown>{JSON.parse(output.output)}</Markdown>
              </Stack>
            )
          }
          if (output.llm_prompt_type === `cleanupTranscript`) {
            return (
              <Stack mb={1}>
                <Typography variant="h3" mb={1}>
                  Transcript
                </Typography>
                <Markdown>{JSON.parse(output.output)}</Markdown>
              </Stack>
            )
          }
        })}
    </Stack>
  )
}
