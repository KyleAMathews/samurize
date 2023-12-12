import { Link, Outlet, useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
// import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import { title } from "../utils/typography"

export default function Root() {
  return (
    <Stack p={2} divider={<Divider />} maxWidth={960} margin="auto">
      <Typography
        variant="h1"
        sx={{ ...title }}
        textAlign="center"
        fontWeight="700"
        pb={2}
      >
        <Link style={{ textDecoration: `none`, color: `inherit` }} to={`/`}>
          Samurize
        </Link>
      </Typography>
      <Outlet />
    </Stack>
  )
}
