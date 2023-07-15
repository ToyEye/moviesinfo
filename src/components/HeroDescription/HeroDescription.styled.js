import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 32px;
  line-height: 1.17;

  color: ${({ theme }) => theme.color.title};
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  @media screen and (min-width: 1268px) {
    font-size: 64px;
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  width: 177px;
  margin-top: 16px;
  font-size: 12px;
  line-height: 1.17;

  color: ${({ theme }) => theme.color.secondaryText};

  @media screen and (min-width: 768px) {
    width: 295px;
    margin-top: 20px;
  }

  @media screen and (min-width: 1268px) {
    margin-top: 28px;
  }
`;

export { Heading, Description };
