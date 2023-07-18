import styled from 'styled-components';

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 28px;

  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export { Section };
