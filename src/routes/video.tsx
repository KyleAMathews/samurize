import { useState } from "react"
import { useParams } from "react-router-dom"
import { useVideo } from "../daos/youtube_videos"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import MLink from "@mui/material/Link"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"
import { trpc } from "../trpc"
import { Markdown } from "../components/markdown"
import { Helmet } from "react-helmet-async"

function Summary({ start, endMins, endSecs, hour, i }) {
  const [seeMore, setSeeMore] = useState(false)
  return (
    <>
      <Typography variant="h4" fontWeight="700" mb={1}>
        {start}:00-{endMins}:{endSecs}
      </Typography>
      <Typography key={i} variant="body1" mb={2}>
        {hour.summary}
      </Typography>
      {seeMore &&
        hour.chunkSummaries.map((chunk: string, j: number) => {
          const chunkStart = start + j * 5
          const chunkEnd =
            j === hour.chunkSummaries.length - 1
              ? `${endMins}:${endSecs}`
              : start + (j + 1) * 5 + `:00`
          return (
            <>
              <Typography pl={2} variant="h4" fontWeight="700" mb={1}>
                {chunkStart}:00-{chunkEnd}
              </Typography>
              <Typography pl={2} key={j} mb={2} variant="body1">
                {chunk}
              </Typography>
            </>
          )
        })}
      <Button
        sx={{ justifyContent: `left`, display: `block` }}
        onClick={() => setSeeMore((seeMore) => !seeMore)}
      >
        {seeMore ? `See Less` : `See More`}
      </Button>
    </>
  )
}
function Summaries({ hourSummaries, endOffset }) {
  const hours = hourSummaries.length
  return hourSummaries.map((hour: any, i: number) => {
    const start = i * 60
    const endMins = i === hours - 1 ? Math.floor(endOffset) : 60
    const endSecs =
      i === hours - 1 ? ((endOffset % 60) / 60).toFixed(2).slice(2) : `00`
    return (
      <Summary
        key={`video-summary-${i}`}
        start={start}
        endMins={endMins}
        endSecs={endSecs}
        hour={hour}
        i={i}
      />
    )
  })
}

function WhyWatchVideo({ outputs }) {
  const output = outputs.find(
    (output) => output.llm_prompt_type == `whyWatchVideo`
  )
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
  console.log({ video, score: video.score })
  console.log(video.score === 1 || video.score === null)

  const transcript = JSON.parse(video.transcript)
  const endOffset = transcript.slice(-1)[0].offset / 1000 / 60
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
      {video.score === 1 || video.score === null ? (
        <>
          <WhyWatchVideo outputs={outputs} />
          {summaries && summaries.slice(-1)[0]?.hour_summaries && (
            <Stack>
              <Typography variant="h2" mb={1}>
                Summary
              </Typography>
              <Summaries
                hourSummaries={JSON.parse(
                  summaries.slice(-1)[0].hour_summaries
                )}
                endOffset={endOffset}
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
            outputs.map((output, i: number) => {
              if (output.llm_prompt_type === `whyWatchVideo`) {
              }
              if (output.llm_prompt_type === `cleanupTranscript`) {
                return (
                  <Stack mb={1} key={`output-${i}`}>
                    <Typography variant="h2" mb={1}>
                      Transcript
                    </Typography>
                    <Markdown>{JSON.parse(output.output)}</Markdown>
                  </Stack>
                )
              }
            })}
        </>
      ) : (
        <Box sx={{ width: `100%` }}>
          <LinearProgress variant="determinate" value={video.score * 100} />
        </Box>
      )}
    </Stack>
  )
}
