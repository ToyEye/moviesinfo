import React from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container.styled';
import Navigation from 'components/Navigation';

const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <Navigation />
        </Container>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
