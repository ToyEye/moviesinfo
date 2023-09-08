import React from 'react';

import Rating from 'components/Rating';
import {
  MovieDetailDescrImg,
  Title,
  TextDeskrWrapper,
  Section,
} from './MovieDetailDescr.styled';
import Container from 'components/Container/Container.styled';

const MovieDetailDescr = ({ movie }) => {
  const genres = movie.genres.map(({ name }) => name);

  return (
    <div>
      <Section>
        <Container>
          <MovieDetailDescrImg
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : ''
            }
            alt={movie.title}
          />
          <Title>{movie.title}</Title>
          <TextDeskrWrapper>
            <p>{movie.overview}</p>
            <p>Tagline: {movie.tagline}</p>
            <p>Genres: {genres.join(', ')}</p>
            <Rating rating={movie.vote_average} />
          </TextDeskrWrapper>
        </Container>
      </Section>
    </div>
  );
};

export default MovieDetailDescr;
