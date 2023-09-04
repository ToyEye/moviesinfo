import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  border: none;
  background-color: ${({ theme }) => !theme.color.mainBG};
  color: ${({ theme }) => theme.color.mainBG};

  transition: 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.white};
  }
`;
