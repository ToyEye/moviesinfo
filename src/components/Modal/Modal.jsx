import React, { useState, useEffect } from 'react';

import { ModalWrapper, ModalWindow } from './Modal.styled';
import { getInfoAboutMovie } from 'services/api';

const Modal = ({ id, onToggleModal }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const data = await getInfoAboutMovie(id);
      setMovie(data);
    };

    getMovie();
  }, [id]);

  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      onToggleModal();
    }
  };

  const { poster_path, title, overview, release_date, vote_average } = movie;

  return (
    <ModalWrapper onClick={handleClick}>
      <ModalWindow>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
      </ModalWindow>
    </ModalWrapper>
  );
};

export default Modal;
