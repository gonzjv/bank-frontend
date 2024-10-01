import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import SignUp from './routes/SignUp.jsx'
import Confirmation from './routes/Confirmation.jsx'
import DashboardRoute from './routes/DashboardRoute.jsx'
import AboutRoute from './routes/AboutRoute.jsx'
import BranchesRoute from './routes/BranchesRoute.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        },
        {
          path: "/confirmation",
          element: <Confirmation/>
        },
        {
          path: "/dashboard",
          element: <DashboardRoute/>
        },
        {
          path: "/about",
          element: <AboutRoute/>
        },
        {
          path: "/branches",
          element: <BranchesRoute/>
        },
      ]
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
