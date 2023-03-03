import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App'

=======
import { RouterProvider } from 'react-router-dom'
>>>>>>> develop
import './index.css'
import Router from './routes/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
