import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TitleStyled = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.17;

  color: ${({ theme }) => theme.color.title};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 28px;
  }
`;

const LinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.17;

  color: ${({ theme }) => theme.color.accent};

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

export { TitleWrapper, TitleStyled, LinkStyled };
