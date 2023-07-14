import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    gap: 40px;
  }

  .active {
    color: ${({ theme }) => theme.color.accent};
  }
`;

const LinkStyled = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.color.navLinks};
  text-transform: uppercase;
  padding-top: 5px;
  padding-bottom: 5px;

  transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.color.accent};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    padding-top: 22px;
    padding-bottom: 22px;
  }
`;

export { NavListStyled, LinkStyled };
