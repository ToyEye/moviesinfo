import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import MovieDetailDescr from 'components/MovieDetailDescr';
import OpionalListLinks from 'components/OpionalListLinks';

import { useGetMovieDetailss } from 'hooks/useGetMovieDetails';

const MovieDetails = () => {
  const { movieDetails } = useParams();
  const { isLoading, movie } = useGetMovieDetailss(movieDetails);

  return (
    <div>
      {isLoading && <Loader />}
      {movie && <MovieDetailDescr movie={movie} />}
      <OpionalListLinks />

      <Outlet />
    </div>
  );
};

export default MovieDetails;
