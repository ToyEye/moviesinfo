import React from 'react';

import { MovieItem, FilmDescription } from './MovieListItem.styled';
import Rating from 'components/reusable/Rating';

import { formateDate } from 'helpers/formateDate';

export const MovieListItem = ({
  title,
  release_date,
  poster_path,

  vote_average,
  id,
  onToggleModal,
  setMovieId,
}) => {
  const handleMovieClick = () => {
    onToggleModal();
    setMovieId(id);
  };

  return (
    <>
      <MovieItem onClick={handleMovieClick}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />

        <FilmDescription>
          <h3>{title}</h3>
          <div>
            <p>
              <span>{formateDate(release_date)} </span>
            </p>
            <Rating rating={vote_average} size={18} />
          </div>
        </FilmDescription>
      </MovieItem>
    </>
  );
};
