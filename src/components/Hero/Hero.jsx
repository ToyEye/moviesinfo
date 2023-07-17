import React, { useEffect, useState } from 'react';

import Container from 'components/Container/Container.styled';
import HeroDescription from 'components/HeroDescription';
import { HeroWrapper, Wrap } from './Hero.styled';

import { getTrandingMovie } from 'services/api';

const Hero = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { results } = await getTrandingMovie('day');
      setMovie(results);
    };

    fetchMovie();
  }, []);

  const getRandomElement = () => {
    if (movies.length === 0) {
      return undefined;
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  };

  const movie = getRandomElement();

  return (
    <HeroWrapper>
      <Container>
        {movies.length > 1 && (
          <>
            <Wrap back={movie.backdrop_path}>
              <HeroDescription movie={movie} />
            </Wrap>
          </>
        )}
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
