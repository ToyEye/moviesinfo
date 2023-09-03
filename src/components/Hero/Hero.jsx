import React, { useEffect, useMemo, useState } from 'react';

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

  const movie = useMemo(() => {
    const getRandomElement = () => {
      if (movies.length === 0) {
        return undefined;
      }

      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex];
    };

    return getRandomElement();
  }, [movies]);

  return (
    <HeroWrapper>
      {movies.length > 1 && (
        <>
          <Wrap back={movie.backdrop_path}>
            <HeroDescription movie={movie} />
          </Wrap>
        </>
      )}
    </HeroWrapper>
  );
};

export default Hero;
