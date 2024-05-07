import React from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../molecules/Sidebar/Sidebar';

export const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
