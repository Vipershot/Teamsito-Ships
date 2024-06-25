import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './routes/AppRouter'

import { AuthProviderFirebase } from './context/AuthContextFirebase'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderFirebase>
        <AppRouter />
      </AuthProviderFirebase>
    </BrowserRouter>
  </React.StrictMode>
)
