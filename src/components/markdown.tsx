import { default as MMarkdown } from "react-markdown"
import Typography from "@mui/material/Typography"

export function Markdown(props) {
  return (
    <MMarkdown
      {...props}
      components={{
        p(props) {
          const { node, ...rest } = props
          return <Typography variant="p" mb={2} {...rest} />
        },
      }}
    />
  )
}
