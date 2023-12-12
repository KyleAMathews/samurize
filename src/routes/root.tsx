import { Link, Outlet, useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import Stack from "@mui/material/Stack"
// import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import { title } from "../utils/typography"

const RootContainer = styled(`div`)(({ theme }) => ({
  [theme.breakpoints.down(`md`)]: {
    padding: theme.spacing(0),
  },
  [theme.breakpoints.up(`md`)]: {
    padding: theme.spacing(2),
  },
}))

export default function Root() {
  return (
    <RootContainer divider={<Divider />} maxWidth={960} margin="auto">
      <Typography
        variant="h1"
        sx={{ ...title }}
        textAlign="center"
        fontWeight="700"
        py={2}
      >
        <Link style={{ textDecoration: `none`, color: `inherit` }} to={`/`}>
          Samurize
        </Link>
      </Typography>
      <Outlet />
    </RootContainer>
  )
}
