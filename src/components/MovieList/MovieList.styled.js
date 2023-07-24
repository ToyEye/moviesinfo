import styled from 'styled-components';

const MovieListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const MovieItem = styled.li`
  position: relative;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 16px) / 3);
  }
`;

export { MovieListStyled, MovieItem };
