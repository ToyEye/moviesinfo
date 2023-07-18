import React from 'react';
import { MovieListStyled, MovieItem } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        </MovieItem>
      ))}
    </MovieListStyled>
  );
};

export default MovieList;
