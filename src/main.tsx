import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import { initElectric, areTablesSynced } from "./init-electric"
import { ElectricalProvider } from "./context"
import { electricRef } from "./trpc"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import * as typographyStyles from "./utils/typography"
import { HelmetProvider } from "react-helmet-async"

import "@fontsource/source-sans-pro"
import "@fontsource/rokkitt"

const styles = {}
for (const key in typographyStyles) {
  // if (typographyStyles.hasOwnProperty(key)) {
  const value = typographyStyles[key]
  if (key === `h2`) {
    styles[key] = {
      ...value,
      color: `hsla(176, 98%, 30%, 1)`,
      fontWeight: 700,
      fontFamily: [
        `Rokkitt`,
        `-apple-system`,
        `BlinkMacSystemFont`,
        `"Segoe UI"`,
        `"Helvetica Neue"`,
        `Arial`,
        `sans-serif`,
        `"Apple Color Emoji"`,
        `"Segoe UI Emoji"`,
        `"Segoe UI Symbol"`,
      ].join(`,`),
    }
  } else {
    styles[key] = value
  }
}
const theme = createTheme({
  spacing: 9,
  typography: {
    fontFamily: [
      `Source Sans Pro`,
      `-apple-system`,
      `BlinkMacSystemFont`,
      `"Segoe UI"`,
      `"Helvetica Neue"`,
      `Arial`,
      `sans-serif`,
      `"Apple Color Emoji"`,
      `"Segoe UI Emoji"`,
      `"Segoe UI Symbol"`,
    ].join(`,`),
    fontSize: 18,
    ...styles,
  },
})

// Routes
import Root from "./routes/root"
import Video from "./routes/video"
import PromptPlayground from "./routes/prompt-playground"
import Index from "./routes/_index"

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: `/video/:videoId`,
        element: <Video />,
        loader: async () => {
          await areTablesSynced([`youtube_videos`])
          return null
        },
      },
      {
        path: `/prompt-playground`,
        element: <PromptPlayground />,
      },
    ],
  },
])

async function render() {
  const electric = await initElectric()
  electricRef.value = electric
  ReactDOM.createRoot(document.getElementById(`root`)!).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <CssBaseline />
          <ElectricalProvider db={electric}>
            <RouterProvider router={router} />
          </ElectricalProvider>
        </HelmetProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

render()
