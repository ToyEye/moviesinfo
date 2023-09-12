import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 30px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.title};
  font-size: 18px;
  letter-spacing: 0.02em;
  text-align: center;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 38px;
    margin-bottom: 40px;
  }
`;

export const OutOfList = styled.h2`
  color: ${({ theme }) => theme.color.title};
  font-size: 28px;
  letter-spacing: 0.02em;
  text-align: center;

  a {
    color: ${({ theme }) => theme.color.accent};
    text-decoration: underline;
  }
`;
