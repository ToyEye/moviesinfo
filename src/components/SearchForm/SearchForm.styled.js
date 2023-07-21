import styled from 'styled-components';

const Form = styled.form`
  padding-top: 40px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const FormDataWrapper = styled.div`
  position: relative;
`;

const InputStyled = styled.input`
  background-color: transparent;
  padding-top: 14.5px;
  padding-bottom: 14.5px;
  padding-left: 24px;
  color: ${({ theme }) => theme.color.form};

  border: 1px solid ${({ theme }) => theme.color.form};
  border-radius: 5px;
  outline: none;
`;

const FormBtn = styled.button`
  display: flex;
  padding: 14px;
  color: ${({ theme }) => theme.color.form};
  background-color: ${({ theme }) => theme.color.accent};
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export { Form, FormDataWrapper, InputStyled, FormBtn };
