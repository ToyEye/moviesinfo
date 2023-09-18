import React from 'react';
import MovieList from 'components/MovieList';
import Container from 'components/reusable/Container/Container.styled';
import { Section } from 'components/reusable/Section/Section.styled';

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
