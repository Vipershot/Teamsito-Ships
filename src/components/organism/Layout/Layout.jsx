import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from '../../../routes'
import Navbar from '../../molecules/Navbar/Navbar'
export const Layout = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={Router} />
    </>
  )
}
