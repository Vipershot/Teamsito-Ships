import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import AuthRoutes from './AuthRoutes'
import { AuthContextFirebase } from '../context/AuthContextFirebase'

export const AppRouter = () => {
    const { user } = useContext(AuthContextFirebase);

    return (
        <Routes>
            {
                user ? <Route path="/*" element={<AppRoutes />} /> : <Route path="/auth/*" element={<AuthRoutes />} />
            }
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
