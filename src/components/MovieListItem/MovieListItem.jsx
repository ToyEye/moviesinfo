import React, { useEffect, useState } from 'react';

import { MovieItem, FilmDescription } from './MovieListItem.styled';
import Rating from 'components/Rating';
import Modal from 'components/Modal';

import { formateDate } from 'helpers/formateDate';

export const MovieListItem = ({
  title,
  release_date,
  poster_path,
  genre_ids,
  genres,
  vote_average,
  id,
  onToggleModal,
  setMovieId,
}) => {
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    genres.forEach(({ id, name }) => {
      if (genre_ids.includes(id)) {
        setAllGenres(prev => [...prev, name]);
      }
    });
  }, [genres, genre_ids]);

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
              <span>{allGenres.splice(0, 2).join(', ')}</span> |{' '}
              <span>{formateDate(release_date)} </span>
            </p>
            <Rating rating={vote_average} size={18} />
          </div>
        </FilmDescription>
      </MovieItem>
    </>
  );
};
