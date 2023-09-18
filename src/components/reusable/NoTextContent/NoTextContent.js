import styled from 'styled-components';

export const NoTextContent = styled.p`
  margin-bottom: 10px;

  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.02em;

  color: ${({ theme }) => theme.color.title};
`;
