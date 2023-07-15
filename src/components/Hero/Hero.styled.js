import styled from 'styled-components';

const HeroWrapper = styled.section`
  margin: 0 auto;
`;

const Wrap = styled.div`
  height: 380px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;

  padding-top: 40px;
  padding-bottom: 131px;

  background-image: ${({ back }) => `linear-gradient(
      77.77deg,
      #111111 33.58%,
      rgba(17, 17, 17, 0) 99%
    ),
    url(https://image.tmdb.org/t/p/original${back})`};
`;

export { HeroWrapper, Wrap };
