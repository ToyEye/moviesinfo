import styled from 'styled-components';

const ThemeChangeWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 16px;
  background: ${prop => prop.theme.color.linear};
  overflow: hidden;

  border-radius: 15px;

  .checkbox {
    appearance: none;
  }

  .theme-toggle {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .checkbox-circle {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translate(0, -50%);
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;

    transition: 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  .checkbox:checked ~ .checkbox-circle {
    transform: translate(30px, -50%);
  }
`;

export { ThemeChangeWrapper };
