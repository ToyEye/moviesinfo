import styled from 'styled-components';

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
