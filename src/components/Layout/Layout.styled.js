import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.mainBG};

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.color.logo};
  gap: 8px;
  z-index: 1;

  span {
    display: none;

    font-size: 24px;
    line-height: 1.16;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

export { HeaderStyled, LogoLink };
