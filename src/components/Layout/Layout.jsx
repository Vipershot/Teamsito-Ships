import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../molecules'
import { Container } from '@mui/material'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 2 }}>
        <Outlet />
      </Container>
    </>
  )
}
