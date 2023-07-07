import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

const LinkStyled = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.color.grey};
  text-transform: uppercase;
  padding-top: 22px;
  padding-bottom: 22px;
`;

export { LinkStyled, NavList };
