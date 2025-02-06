import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './ui/Header/Header';
import { Footer } from './ui/Footer/Footer';

export const Layout = () => {
  return (
    <Container fixed>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
