import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from '../../routes'
import Navbar from '../molecules/Navbar/Navbar'
import { Container } from '@mui/material'
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 2 }}>
        <RouterProvider router={Router} />
      </Container>
    </>
  )
}
