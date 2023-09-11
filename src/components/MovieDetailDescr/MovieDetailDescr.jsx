import React from 'react';
import { useLocation } from 'react-router-dom';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

import Rating from 'components/Rating';
import {
  MovieDetailDescrImg,
  Title,
  TextDeskrWrapper,
  Section,
  GoBackLink,
} from './MovieDetailDescr.styled';
import Container from 'components/Container/Container.styled';

const MovieDetailDescr = ({ movie }) => {
  const genres = movie.genres.map(({ name }) => name);
  const location = useLocation();

  const goBackPath = location?.state?.from ?? '/';

  return (
    <div>
      <Section>
        <Container>
          <GoBackLink to={goBackPath}>
            <BsFillArrowLeftCircleFill size={28} />
          </GoBackLink>
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
