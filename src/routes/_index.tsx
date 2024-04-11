import { useState } from "react"
import { useCreateYoutubeVideo } from "../daos/youtube_videos"
import { Link, useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import LoadingButton from "@mui/lab/LoadingButton"
import TextField from "@mui/material/TextField"
import { Helmet } from "react-helmet-async"
import { tracer } from "../utils/tracer"
import { context } from "@opentelemetry/api"

export default function Index() {
  const createVideo = useCreateYoutubeVideo()
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <Stack spacing={1} p={2} maxWidth={600} margin="auto">
      <Helmet>
        <title>Samurize</title>
      </Helmet>
      <form
        onSubmit={async (e) => {
          await tracer.startActiveSpan(`createVideo`, async (span) => {
            setLoading(true)
            e.preventDefault()
            const form = e.currentTarget
            const formData = new FormData(form)
            const data = Object.fromEntries(formData)
            let id: string | null = null
            let videoExists: boolean = false
            let error: Error | null = null
            const ctx = context.active()

            try {
              const result = await createVideo(
                data.youtube_url.toString(),
                setErrorMessage,
                setLoading
              )
              id = result.id
              videoExists = result.videoExists
            } catch (e) {
              error = e as Error
              console.log(`error`, e)
            }

            if (!error && id) {
              setErrorMessage(null)
              span.end()
              navigate(`/video/${id}`)
            } else if (error) {
              form.reset()
              span.recordException(error)
              span.end()
              setErrorMessage(error.message)
              setLoading(false)
            }
          })
        }}
      >
        <Stack spacing={1} mb={3}>
          <Typography variant="h1" pb={1}>
            AI-powered YouTube Summarization
          </Typography>
          <TextField
            error={errorMessage != null}
            required
            name="youtube_url"
            placeholder="YouTube url"
            helperText={errorMessage}
          />
          <LoadingButton variant="outlined" type="submit" loading={loading}>
            Samurize
          </LoadingButton>
        </Stack>
      </form>
      <Stack spacing={1}>
        <Typography variant="h3">Try a few examples</Typography>
        <List
          sx={{
            listStyleType: `disc`,
            "& .MuiListItem-root": {
              display: `list-item`,
              p: 0,
              ml: 3,
            },
          }}
        >
          <ListItem>
            <Link to={`/video/PUv66718DII`}>
              Bret Victor - Inventing on Principle
            </Link>
          </ListItem>
          <ListItem>
            <Link to={`/video/yJDv-zdhzMY`}>
              The Mother of All Demos, presented by Douglas Engelbart (1968)
            </Link>
          </ListItem>
          <ListItem>
            <Link to={`/video/MnrJzXM7a6o`}>
              Steve Jobs introduces iPhone in 2007
            </Link>
          </ListItem>
          <ListItem>
            <Link to={`/video/lK8gYGg0dkE`}>
              President Franklin D. Roosevelt Declares War on Japan
            </Link>
          </ListItem>
          <ListItem>
            <Link to={`/video/j3mhkYbznBk`}>
              Richard Feynman - The.Character of Physical Law - Part 1 The Law
              of Gravitation
            </Link>
          </ListItem>
        </List>
      </Stack>
      <div>
        This site is built with{` `}
        <a href="https://electric-sql.com/">ElectricSQL</a>
        {` `}
        and is open source.{` `}
        <a href="https://github.com/KyleAMathews/samurize">
          View code on GitHub.
        </a>
      </div>
    </Stack>
  )
}
