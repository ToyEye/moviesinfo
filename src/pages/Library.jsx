import React from 'react';
import MovieList from 'components/MovieList';
import { useSelector } from 'react-redux';

const Library = () => {
  const movies = useSelector(state => state.movies.movies);

  return (
    <div>
      <MovieList movies={movies} isLibrary />
    </div>
  );
};

export default Library;
