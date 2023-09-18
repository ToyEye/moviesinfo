import React, { useEffect, useState } from 'react';

import Container from 'components/reusable/Container/Container.styled';
import MovieList from 'components/MovieList';
import { TitleWrapper, TitleStyled, LinkStyled } from './WeeklyTrends.styled';
import { Section } from 'components/reusable/Section/Section.styled';

import { getTrandingMovie } from 'services/api';

const WeeklyTrends = ({ home }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getTrandingMovie('week');

      if (home) {
        const randomIndexes = [];
        const result = [];

        while (randomIndexes.length < 3) {
          const randomIndex = Math.floor(Math.random() * results.length);

          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
            result.push(results[randomIndex]);
          }
        }

        setMovies(result);
      } else {
        setMovies(results);
      }
    };

    getMovies();
  }, [home]);

  return (
    <Section>
      <Container>
        {home && (
          <TitleWrapper>
            <TitleStyled>WEEKLY TRENDS</TitleStyled>
            <LinkStyled to="/catalog">See all</LinkStyled>
          </TitleWrapper>
        )}
        {movies.length > 0 && <MovieList movies={movies} />}
      </Container>
    </Section>
  );
};

export default WeeklyTrends;
