import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
)
