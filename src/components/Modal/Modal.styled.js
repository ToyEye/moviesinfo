import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.openMobileMenu};

  z-index: 10;
`;

export const ModalWindow = styled.div`
  position: fixed;
  display: block;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 15px;

  background-color: #000;
`;

export const FilmInfoWrapper = styled.div`
  display: flex;
  gap: 15px;
  color: ${({ theme }) => theme.color.white};
  padding: 15px;

  p {
    margin-bottom: 25px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
