import React from 'react';
import { useLocation } from 'react-router';

import { NavListStyled, LinkStyled } from './NavList.styled';

import { routes } from 'routes/routes';

const NavList = () => {
  const location = useLocation();
  return (
    <NavListStyled>
      {routes.map(({ id, name, path, aria }) => {
        const active = location.pathname === path ? 'active' : '';

        return (
          <li key={id}>
            <LinkStyled to={`${path}`} aria-label={aria} className={active}>
              {name}
            </LinkStyled>
          </li>
        );
      })}
    </NavListStyled>
  );
};

export default NavList;
