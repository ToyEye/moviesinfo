import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ text, onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
