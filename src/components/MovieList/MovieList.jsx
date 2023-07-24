import React, { useEffect, useState } from 'react';
import { MovieListStyled, MovieItem } from './MovieList.styled';
import { formateDate } from 'helpers/formateDate';
import { getGenres } from 'services/api';

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

  useEffect(() => {
    const filtredGenres = array => {
      const genres = [];
      if (allGenres.lenght) {
        for (const elem of allGenres) {
          if (array.includes(elem.id)) {
            genres.push(elem.name);
          }
        }
      }
      return genres;
    };

    console.log(filtredGenres([28, 12, 878]));
  }, [allGenres]);

  // console.log(allGenres);
  // [28, 12, 878];
  // console.log(filtredGenres([28, 12, 878]))
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{formateDate(movie.release_date)} </p>
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
