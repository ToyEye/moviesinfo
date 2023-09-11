import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const rotate = keyframes`
        from {
          transform: translateX(100%);
        }
      
        to {
          transform: translateX(0);
        }
      `;

export const Section = styled.section`
  padding-bottom: 80px;
`;

export const MovieDetailDescrImg = styled.img``;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-top: 28px;
  margin-bottom: 28px;

  color: ${({ theme }) => theme.color.title};
`;

export const TextDeskrWrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 18px;
  justify-items: center;

  color: ${({ theme }) => theme.color.title};
`;

export const GoBackLink = styled(Link)`
  position: absolute;
  top: 23%;

  display: block;
  width: 28px;
  height: 28px;
  border-radius: 50%;

  svg {
    border-radius: 50%;
    color: ${({ theme }) => theme.color.navLinks};
  }

  animation: ${rotate} linear 1s infinite alternate;
  @media screen and (min-width: 768px) {
    top: 56%;
  }

  @media screen and (min-width: 1280px) {
    top: 72%;
  }
`;
