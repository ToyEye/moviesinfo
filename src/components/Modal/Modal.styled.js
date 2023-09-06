import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: block;
  position: absolute;
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
  width: 50%;
  height: 50%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 15px;

  background-color: #000;
`;
