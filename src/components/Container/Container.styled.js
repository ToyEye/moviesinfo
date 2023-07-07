import styled from 'styled-components';

const Container = styled.div`
  width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export default Container;
