import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  padding-bottom: 80px;
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const NoPhotoActor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  font-size: 22px;

  border-bottom: 1px solid black;
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.openMobileMenu};
  border-radius: 5px;
  overflow: hidden;

  img {
    height: 100%;
  }
`;

export const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding-top: 10px;
  padding-bottom: 10px;

  color: ${({ theme }) => theme.color.title};
`;

const move = keyframes`
        from {
          transform: translateY(100%);
        }
      
        to {
          transform: translateY(0);
        }
      `;

export const BtnUp = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 20%;
  right: 5px;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.color.openMobileMenu};
  svg {
    border-radius: 50%;
    color: ${({ theme }) => theme.color.accent};
  }

  cursor: pointer;
  animation: ${move} linear 1s infinite alternate;
`;
