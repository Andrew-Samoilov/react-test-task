import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './routes/error-page'
import RocketRout from "./routes/rocket-rout";
import HomeRout from './routes/home-rout';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRout />,
    errorElement: <ErrorPage />
  },
  {
    path: "rocket/:rocketId",
    element: <RocketRout />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
