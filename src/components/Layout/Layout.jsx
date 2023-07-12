import React from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderStyled } from './Layout.styled';

import Container from 'components/Container/Container.styled';
import Navigation from 'components/Navigation';
import ChangeTheme from 'components/ChangeTheme/ChangeTheme';

const Layout = ({ toggleTheme, checked }) => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <Navigation />
          <ChangeTheme toggleTheme={toggleTheme} checked={checked} />
        </Container>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Layout;
