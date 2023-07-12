import React from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderStyled, LogoLink } from './Layout.styled';

import Container from 'components/Container/Container.styled';
import Navigation from 'components/Navigation';
import ChangeTheme from 'components/ChangeTheme/ChangeTheme';

import logo from 'images/logo.svg';

const Layout = ({ toggleTheme, checked }) => {
  return (
    <>
      <HeaderStyled>
        <Container className="header-container">
          <LogoLink>
            <img src={logo} alt="logo Cinemania" /> <span>Cinemania</span>
          </LogoLink>
          <Navigation />
          <ChangeTheme toggleTheme={toggleTheme} checked={checked} />
        </Container>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Layout;
