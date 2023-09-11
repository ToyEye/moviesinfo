import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  ModalWrapper,
  ModalWindow,
  FilmInfoWrapper,
  ButtonWrapper,
} from './Modal.styled';
import Rating from 'components/Rating';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { LinkButton } from 'components/LinkStyled/LinkStyled';
import { useGetMovieDetailss } from 'hooks/useGetMovieDetails';
import { addMovie } from 'redux/moviesSlice';

const Modal = ({ id, onToggleModal }) => {
  const location = useLocation();
  const { isLoading, movie } = useGetMovieDetailss(id);

  const dispath = useDispatch();

  const handleSaveMovie = () => {
    dispath(addMovie(movie));
  };

  useEffect(() => {
    const onEscPress = evt => {
      if (evt.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [onToggleModal]);

  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      onToggleModal();
    }
  };

  return (
    <ModalWrapper onClick={handleClick}>
      {isLoading && <Loader />}

      <ModalWindow>
        {movie && (
          <FilmInfoWrapper>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : ''
              }
              alt={movie.title}
            />
            <div>
              <p>{movie.overview}</p>
              <p>{movie.release_date}</p>
              <Rating rating={movie.vote_average} size={18} />
            </div>
          </FilmInfoWrapper>
        )}

        <ButtonWrapper>
          <Button text="Add to library" onClick={handleSaveMovie} />
          <LinkButton to={`/catalog/${id}`} state={{ from: location }}>
            See details
          </LinkButton>
        </ButtonWrapper>
      </ModalWindow>
    </ModalWrapper>
  );
};

export default Modal;
