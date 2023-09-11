import React, { useEffect, useState } from 'react';

import { MovieListStyled } from './MovieList.styled';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import Modal from 'components/Modal';

import { getGenres } from 'services/api';

const MovieList = ({ movies }) => {
  const [allGenres, setAllGenres] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [movieId, setMovieId] = useState(0);

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

  const onToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {' '}
      <MovieListStyled>
        {movies.map(
          ({
            id,
            title,
            release_date,
            poster_path,
            genre_ids,
            vote_average,
            genres,
          }) => (
            <MovieListItem
              key={id}
              id={id}
              title={title}
              release_date={release_date}
              poster_path={poster_path}
              genres={allGenres}
              genre_ids={genre_ids || genres}
              vote_average={vote_average}
              onToggleModal={onToggleModal}
              setMovieId={setMovieId}
            />
          )
        )}
      </MovieListStyled>
      {openModal && <Modal onToggleModal={onToggleModal} id={movieId} />}
    </>
  );
};

export default MovieList;
