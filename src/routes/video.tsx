import { useParams } from "react-router-dom"
import { useLiveQuery } from "electric-sql/react"
import { useElectric } from "../context"
import { useVideo } from "../daos/youtube_videos"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import MLink from "@mui/material/Link"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { trpc } from "../trpc"
import { Markdown } from "../components/markdown"
import { Helmet } from "react-helmet-async"

function Summary({ hourSummaries }) {
  console.log(hourSummaries)
  return hourSummaries.map((hour, i) => (
    <Typography key={i} variant="p">
      {hour.summary}
    </Typography>
  ))
}

function WhyWatchVideo({ outputs }) {
  const output = outputs.find(
    (output) => output.llm_prompt_type == `whyWatchVideo`
  )
  console.log({ outputs, output })
  if (output === undefined) {
    return null
  } else {
    return (
      <Stack mb={1}>
        <Typography variant="h2" mb={1}>
          Why Watch This Video
        </Typography>
        <Markdown>{JSON.parse(output.output)}</Markdown>
      </Stack>
    )
  }
}

export default function Video() {
  const { videoId } = useParams()
  const [video, summaries, outputs] = useVideo(videoId)

  if (
    videoId === undefined ||
    video === undefined ||
    summaries === undefined ||
    outputs === undefined
  ) {
    return null
  }

  return (
    <Stack p={3} maxWidth={600} margin="auto">
      <Helmet>
        <title>{video.title} | Samurize</title>
      </Helmet>
      <Typography variant="h1" mb={1}>
        {video.title}
      </Typography>
      <Box mb={3}>
        <MLink href={video.author_url}>{video.author_name}</MLink>
        {` | `}
        <MLink href={`https://www.youtube.com/watch?v=${videoId}`}>
          Watch on YouTube
        </MLink>
      </Box>
      <WhyWatchVideo outputs={outputs} />
      {summaries && summaries.slice(-1)[0]?.hour_summaries && (
        <Stack>
          <Typography variant="h2" mb={1}>
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
        Show Transcript
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
          }
          if (output.llm_prompt_type === `cleanupTranscript`) {
            return (
              <Stack mb={1}>
                <Typography variant="h2" mb={1}>
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
