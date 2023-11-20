import { useVideos, useCreateYoutubeVideo } from "../daos/youtube_videos"
import { Link, Outlet, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
// import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Divider from "@mui/material/Divider"
import { trpc } from "../trpc"

export default function Root() {
  const createVideo = useCreateYoutubeVideo()
  const videos = useVideos()
  const navigate = useNavigate()

  if (videos === undefined) {
    return null
  }

  console.log(`render root`)
  return (
    <Stack p={2} divider={<Divider />} maxWidth={960} margin="auto">
      <Typography variant="h1" textAlign="center" fontWeight="700" pb={2}>
        Samurize
      </Typography>
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        direction="row"
        spacing={4}
        mt={3}
      >
        <Stack spacing={1} flex={`0 0 300px`}>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const form = e.currentTarget
              const formData = new FormData(form)
              const data = Object.fromEntries(formData)
              const id = await createVideo(data.youtube_url)
              navigate(`/video/${id}`)
              await trpc.youtubeBasicSummary.mutate({ id })
              form.reset()
            }}
          >
            <Stack spacing={1} mb={3}>
              <TextField
                required
                name="youtube_url"
                placeholder="YouTube url"
              />
              <Button variant="outlined" type="submit">
                Add video
              </Button>
            </Stack>
          </form>

          <Stack spacing={1}>
            {videos.map((video) => {
              return (
                <div key={video.id}>
                  <Link to={`/video/${video.id}`}>{video.title}</Link>
                </div>
              )
            })}
          </Stack>
        </Stack>
        <Outlet />
      </Stack>
    </Stack>
  )
}
