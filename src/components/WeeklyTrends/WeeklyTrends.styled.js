import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 44px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 60px;
  }
`;

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

export { Section, TitleWrapper, TitleStyled, LinkStyled };
