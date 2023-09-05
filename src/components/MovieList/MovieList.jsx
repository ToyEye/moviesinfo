import React, { useEffect, useState } from 'react';

import { MovieListStyled } from './MovieList.styled';

import { getGenres } from 'services/api';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    const getGenresForMovie = async () => {
      try {
        const { genres } = await getGenres();
        setAllGenres(genres);
      } catch (error) {
        console.log(error.message);
      }
    };

    getGenresForMovie();
  }, []);

  return (
    <MovieListStyled>
      {movies.map(
        ({ id, title, release_date, poster_path, genre_ids, vote_average }) => (
          <MovieListItem
            key={id}
            id={id}
            title={title}
            release_date={release_date}
            poster_path={poster_path}
            genres={allGenres}
            genre_ids={genre_ids}
            vote_average={vote_average}
          />
        )
      )}
    </MovieListStyled>
  );
};

export default MovieList;
