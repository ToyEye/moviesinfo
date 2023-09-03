import React, { useEffect, useState } from 'react';
import { MovieItem } from './MovieListItem.styled';
import { formateDate } from 'helpers/formateDate';

export const MovieListItem = ({
  id,
  title,
  release_date,
  poster_path,
  genre_ids,
  genres,
}) => {
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    genres.forEach(({ id, name }) => {
      if (genre_ids.includes(id)) {
        setAllGenres(prev => [...prev, name]);
      }
    });
  }, [genres, genre_ids]);

  return (
    <MovieItem>
      <h3>{title}</h3>
      {allGenres.splice(0, 2).join(', ')}
      <p>{formateDate(release_date)} </p>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
    </MovieItem>
  );
};
