import React, { useState } from 'react';

import { MovieListStyled } from './MovieList.styled';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import Modal from 'components/Modal';

const MovieList = ({ movies }) => {
  const [openModal, setOpenModal] = useState(false);
  const [movieId, setMovieId] = useState(0);

  const onToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <MovieListStyled>
        {movies.map(
          ({
            id,
            title,
            release_date,
            poster_path,

            vote_average,
          }) => (
            <MovieListItem
              key={id}
              id={id}
              title={title}
              release_date={release_date}
              poster_path={poster_path}
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
