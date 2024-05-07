import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import AuthRoutes from './AuthRoutes'
import { AuthContext } from '../context/authContext'
import { useEffect } from 'react'
export const AppRouter = () => {
    const { user, } = useContext(AuthContext)
    const token = localStorage.getItem('token')
    useEffect(() => {
        console.log('*************', user)
    }, [user])

    return (
        <Routes>
            {token ? <Route path="/*" element={<AppRoutes />} /> :
                <Route path="/auth/*" element={<AuthRoutes />} />}
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
