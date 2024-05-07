import React from 'react'
import { LoginView, RegisterView } from '../views'
import { Navigate, Route, Routes } from 'react-router-dom'

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
            <Route path='/*' element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}

export default AuthRoutes