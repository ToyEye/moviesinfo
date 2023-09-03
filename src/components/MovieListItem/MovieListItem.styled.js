import styled from 'styled-components';

export const MovieItem = styled.li`
  position: relative;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 16px) / 3);
  }
`;
