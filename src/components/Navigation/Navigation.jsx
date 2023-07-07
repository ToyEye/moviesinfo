import React from 'react';
import { LinkStyled, NavList } from './Navigation.styled';
import { routes } from 'routes/routes';

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavList>
          {routes.map(({ id, name, path, aria }) => (
            <li key={id}>
              <LinkStyled to={`${path}`} aria-label={aria}>
                {name}
              </LinkStyled>
            </li>
          ))}
        </NavList>
      </nav>
    </div>
  );
};

export default Navigation;
