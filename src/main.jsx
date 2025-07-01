import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Page/Root.jsx'
import MainPage from './Page/MainPage.jsx'
import Project from './Page/Project.jsx'

const root = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [{
    path: '',
    element: <MainPage />
  }, {
    path: "project/:id",
    element: <Project />
  }
  ]
}])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root} />
  </StrictMode>,
)
