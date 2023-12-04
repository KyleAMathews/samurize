import { useState } from "react"
import { useVideos, useCreateYoutubeVideo } from "../daos/youtube_videos"
import { Link, useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Helmet } from "react-helmet-async"
import { trpc } from "../trpc"

export default function Index() {
  const createVideo = useCreateYoutubeVideo()
  const videos = useVideos()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  if (videos === undefined) {
    return null
  }

  return (
    <Stack spacing={1} p={3} maxWidth={600} margin="auto">
      <Helmet>
        <title>Samurize</title>
      </Helmet>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const form = e.currentTarget
          const formData = new FormData(form)
          const data = Object.fromEntries(formData)
          let id: string | null = null
          let error: Error | null = null

          try {
            id = await createVideo(data.youtube_url)
          } catch (e) {
            error = e as Error
            console.log(e)
          }

          if (!error && id) {
            setErrorMessage(null)
            navigate(`/video/${id}`)
            await trpc.youtubeBasicSummary.mutate({ id })
            form.reset()
          } else if (error) {
            setErrorMessage(error.message)
          }
        }}
      >
        <Stack spacing={1} mb={3}>
          <Typography variant="h1">Summerize a YouTube video</Typography>
          <TextField
            error={errorMessage != null}
            required
            name="youtube_url"
            placeholder="YouTube url"
            helperText={errorMessage}
          />
          <Button variant="outlined" type="submit">
            Samurize
          </Button>
        </Stack>
      </form>

      <Stack spacing={1}>
        <Typography variant="h3">Recent videos</Typography>
        {videos &&
          videos.map((video) => {
            return (
              <div key={video.id}>
                <Link to={`/video/${video.id}`}>{video.title}</Link>
              </div>
            )
          })}
      </Stack>
    </Stack>
  )
}
