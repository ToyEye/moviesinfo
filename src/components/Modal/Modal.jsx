import React, { useState, useEffect } from 'react';
import { ModalWrapper } from './Modal.styled';
import { getInfoAboutMovie } from 'services/api';

const Modal = ({ id }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const data = await getInfoAboutMovie(id);
      setMovie(data);
    };

    getMovie();
  }, [id]);

  return <ModalWrapper>Modal</ModalWrapper>;
};

export default Modal;
