import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import {
  LinkStyled,
  NavList,
  NavWrapper,
  MenuBtn,
  MobileMenu,
  MenuMobWrapper,
} from './Navigation.styled';

import { routes } from 'routes/routes';

const Navigation = () => {
  const [isMobile, setIsmobile] = useState(() => {
    return window.matchMedia('(max-width: 767px)').matches;
  });

  const [isOpenMenu, setIsOpenMenu] = useState(false);

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

  const location = useLocation();

  const isActive = isOpenMenu ? 'active' : '';

  return (
    <NavWrapper>
      {!isMobile && (
        <nav>
          <NavList>
            {routes.map(({ id, name, path, aria }) => {
              const active = location.pathname === path ? 'active' : '';

              return (
                <li key={id}>
                  <LinkStyled
                    to={`${path}`}
                    aria-label={aria}
                    className={active}
                  >
                    {name}
                  </LinkStyled>
                </li>
              );
            })}
          </NavList>
        </nav>
      )}
      {isMobile && (
        <>
          <MenuBtn onClick={handleOpenMenu}>Menu</MenuBtn>
          <MenuMobWrapper onClick={closeModal} className={isActive}>
            <MobileMenu>
              <NavList>
                {routes.map(({ id, name, path, aria }) => {
                  const active = location.pathname === path ? 'active' : '';

                  return (
                    <li key={id}>
                      <LinkStyled
                        to={`${path}`}
                        aria-label={aria}
                        className={active}
                      >
                        {name}
                      </LinkStyled>
                    </li>
                  );
                })}
              </NavList>
            </MobileMenu>
          </MenuMobWrapper>
        </>
      )}
    </NavWrapper>
  );
};

export default Navigation;
