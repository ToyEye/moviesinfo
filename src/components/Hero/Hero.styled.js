import styled from 'styled-components';

const HeroWrapper = styled.section`
  margin: 0 auto;
`;

const Wrap = styled.div`
  max-width: 320px;
  height: 380px;
  margin: 0 auto;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  padding-left: 20px;
  padding-top: 40px;
  padding-bottom: 131px;

  background-image: ${({ back }) => `linear-gradient(
      77.77deg,
      #111111 33.58%,
      rgba(17, 17, 17, 0) 99%
    ),
    url(https://image.tmdb.org/t/p/original${back})`};

  @media screen and (min-width: 768px) {
    max-width: 768px;
    height: 432px;

    padding-left: 32px;
    padding-top: 36px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    height: 720px;
    padding-top: 118px;
    padding-bottom: 115px;
  }
`;

export { HeroWrapper, Wrap };
