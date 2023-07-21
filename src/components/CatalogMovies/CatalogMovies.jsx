import React from 'react';
import MovieList from 'components/MovieList';
import Container from 'components/Container/Container.styled';
import { Section } from './CatalogMovies.styled';

const CatalogMovies = ({ movies }) => {
  return (
    <Section>
      <Container>
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default CatalogMovies;
