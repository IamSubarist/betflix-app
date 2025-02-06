import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './ui/Header/Header';
import { Footer } from './ui/Footer/Footer';

export const Layout = () => {
  return (
    <Container fixed>
      <Box sx={{ p: 4 }} />
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
