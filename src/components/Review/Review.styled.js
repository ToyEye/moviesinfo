import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 80px;
  padding-top: 80px;

  .accordion__panel {
    background-color: ${({ theme }) => theme.color.accordionPanel};
  }
`;

export const ReviewDate = styled.p`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.accordionColor};
`;

export const ReviewContant = styled.p`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.accordionColor};

  letter-spacing: 0.02em;
`;
