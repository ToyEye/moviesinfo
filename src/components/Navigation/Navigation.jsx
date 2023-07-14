import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import NavList from 'components/NavList';
import {
  NavWrapper,
  MenuBtn,
  MobileMenu,
  MenuMobWrapper,
} from './Navigation.styled';

const Navigation = () => {
  const [isMobile, setIsmobile] = useState(() => {
    return window.matchMedia('(max-width: 767px)').matches;
  });

  const [path, setPath] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setPath(pathname);

    if (path !== pathname) {
      setIsOpenMenu(false);
    }
  }, [path, pathname]);

  useEffect(() => {
    window
      .matchMedia('(max-width: 767px)')
      .addEventListener('change', event => {
        if (event.matches) {
          setIsmobile(true);
        } else {
          setIsmobile(false);
        }
      });
  }, []);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeModal = evt => {
    if (evt.target === evt.currentTarget) {
      setIsOpenMenu(false);
    }
  };

  const isActive = isOpenMenu ? 'active' : '';

  return (
    <NavWrapper>
      {!isMobile && (
        <nav>
          <NavList />
        </nav>
      )}
      {isMobile && (
        <>
          <MenuBtn onClick={handleOpenMenu}>Menu</MenuBtn>
          <MenuMobWrapper onClick={closeModal} className={isActive}>
            <MobileMenu>
              <NavList />
            </MobileMenu>
          </MenuMobWrapper>
        </>
      )}
    </NavWrapper>
  );
};

export default Navigation;
