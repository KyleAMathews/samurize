import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import initElectric from "./init-electric"
import Index from "./routes/index"
import { ElectricalProvider } from "./context"
import { electricRef } from "./trpc"

// Start example routes
import Root from "./routes/root"
import Contact from "./routes/contact"
import EditContact from "./routes/edit"
// End eample routes

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
        path: `contacts/:contactId`,
        element: <Contact />,
      },
      {
        path: `contacts/:contactId/edit`,
        element: <EditContact />,
      },
    ],
  },
])

async function render() {
  const electric = await initElectric()
  electricRef.value = electric
  ReactDOM.createRoot(document.getElementById(`root`)!).render(
    <React.StrictMode>
      <ElectricalProvider db={electric}>
        <RouterProvider router={router} />
      </ElectricalProvider>
    </React.StrictMode>
  )
}

render()
