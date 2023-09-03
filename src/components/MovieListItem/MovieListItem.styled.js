import styled from 'styled-components';

export const MovieItem = styled.li`
  position: relative;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 16px) / 3);
  }

  img {
    filter: brightness(0.5);
  }

  h3 {
    margin-bottom: 10px;
  }
`;

export const FilmDescription = styled.div`
  position: absolute;
  bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  color: #ffffff;
`;
