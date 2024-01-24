import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize"
import { styled } from "@mui/system"
import { usePromptPlaygroundTrpcCalls } from "../daos/trpc-calls"
import { Markdown } from "../components/markdown"
import Divider from "@mui/material/Divider"

const TextArea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  padding: 9px 12.5px;
  border-radius: 8px;
`
)

export default function PromptPlayground() {
  const calls = usePromptPlaygroundTrpcCalls()
  console.log({ calls })

  if (calls === undefined) {
    return null
  }
  return (
    <Stack minWidth="100%">
      <Typography variant="h2" mb={2}>
        Prompt Playground
      </Typography>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const form = e.currentTarget
          const formData = new FormData(form)
          const data = Object.fromEntries(formData)
          console.log({ data })
          // const id = await createVideo(data.youtube_url)
          // navigate(`/video/${id}`)
          await trpc.promptPlayground.mutate({
            prompt: data.prompt as string,
          })
          form.reset()
        }}
      >
        <Stack spacing={1} mb={3}>
          <TextArea
            minRows={5}
            required
            name="prompt"
            placeholder="Prompt url"
          />
          <Button variant="outlined" type="submit">
            Test Prompt against 10 random video summaries
          </Button>
        </Stack>
      </form>
      <Typography variant="h3" mb={3}>
        Results
      </Typography>
      <Stack spacing={1} divider={<Divider flexItem />}>
        {calls.map((call) => {
          console.log({ call })
          return (
            <>
              <strong>Prompt:</strong> {JSON.parse(call.input).prompt}
              <strong>Responses:</strong>
              {` `}
              <ul>
                {JSON.parse(call.response).map((response) => (
                  <li>
                    <Markdown>{response}</Markdown>
                  </li>
                ))}
              </ul>
            </>
          )
        })}
      </Stack>
    </Stack>
  )
}
