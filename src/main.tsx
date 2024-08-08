import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from "./error-page";
import RocketRout from "./routes/rocketRout";
import './index.css'
import HomeRout from './routes/homeRout';

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
