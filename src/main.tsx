import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import { initElectric, electricSqlLoader } from "electric-query"
import sqliteWasm from "wa-sqlite/dist/wa-sqlite-async.wasm?asset"
import { Electric, schema } from "./generated/client"
import { ElectricalProvider } from "./context"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import * as typographyStyles from "./utils/typography"
import { HelmetProvider } from "react-helmet-async"
import { authToken } from "./auth"

import { videoQueries, indexQueries } from "./daos/youtube_videos"
import { routeCache, transformQueriesObject } from "./daos/cache"

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
    fontSize: 16,
    ...styles,
  },
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    // Name of the component ⚛️
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          transition: `none !important`,
          animation: `none !important`,
        },
      },
    },
  },
  transitions: {
    // So we have `transition: none;` everywhere
    create: () => `none`,
  },
})

console.log(theme)

// Routes
import Root from "./routes/root"
import Video from "./routes/video"
// import PromptPlayground from "./routes/prompt-playground"
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
        loader: async (props) => {
          const url = new URL(props.request.url)
          const key = url.pathname + url.search
          electricSqlLoader<Electric>({
            key,
            shapes: ({ db }) => [
              {
                shape: db.youtube_videos.sync(),
                isReady: async () => !!(await db.youtube_videos.findFirst()),
              },
            ],
            queries: ({ db }) => Video.queries({ db, id: `` }),
          })

          return null
        },
      },
      {
        path: `/video/:videoId`,
        element: <Video />,
        loader: async (props) => {
          const url = new URL(props.request.url)
          const key = url.pathname + url.search
          await electricSqlLoader<Electric>({
            key,
            shapes: ({ db }) => [
              {
                shape: db.youtube_videos.sync(),
                isReady: async () => !!(await db.youtube_videos.findFirst()),
              },
              {
                shape: db.youtube_llm_outputs.sync({
                  include: {
                    youtube_videos: true,
                  },
                }),
                isReady: async () =>
                  !!(await db.youtube_llm_outputs.findFirst()),
              },
              {
                shape: db.youtube_basic_summary.sync({
                  include: {
                    youtube_videos: true,
                  },
                }),
                isReady: async () =>
                  !!(await db.youtube_basic_summary.findFirst()),
              },
            ],
            queries: ({ db }) =>
              Video.queries({ db, id: props.params.videoId }),
          })

          return null
        },
      },
      // {
      // path: `/prompt-playground`,
      // element: <PromptPlayground />,
      // },
    ],
  },
])

declare const ELECTRIC_URL: string
const electricUrl =
  typeof ELECTRIC_URL === `undefined`
    ? `ws://localhost:5133`
    : `wss://${ELECTRIC_URL}`

const token = authToken()
async function render() {
  const electric = await initElectric({
    appName: `samurize`,
    schema,
    sqliteWasmPath: sqliteWasm,
    config: {
      auth: {
        token,
      },
      debug: false, //DEBUG_MODE,
      url: electricUrl,
    },
  })
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
