import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
  position: relative;
`;

const MenuMobWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.color.openMobileMenu};

  transition: 300ms cubic-bezier(0.23, 1, 0.32, 1);

  transform: translateX(-100%);

  &.active {
    transform: translateX(0);
  }
`;

const MenuBtn = styled.button`
  font-family: inherit;
  color: ${({ theme }) => theme.color.navLinks};
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.color.accent};
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  padding-left: 20px;
  min-width: 275px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 50%;
  background-color: ${({ theme }) => theme.color.menuBG};
`;

const NavList = styled.ul`
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

export { LinkStyled, NavList, NavWrapper, MenuBtn, MobileMenu, MenuMobWrapper };
