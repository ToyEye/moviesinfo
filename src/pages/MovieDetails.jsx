import React from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import MovieDetailDescr from 'components/MovieDetailDescr';
import { useGetMovieDetailss } from 'hooks/useGetMovieDetails';

const MovieDetails = () => {
  const { movieDetails } = useParams();
  const { isLoading, movie } = useGetMovieDetailss(movieDetails);
  console.log(movie);

  return (
    <div>
      {isLoading && <Loader />}
      {movie && <MovieDetailDescr movie={movie} />}
    </div>
  );
};

export default MovieDetails;
