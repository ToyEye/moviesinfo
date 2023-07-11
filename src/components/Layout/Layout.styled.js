import styled from 'styled-components';
import useChangeTheme from 'hooks/useChangeTheme';

const HeaderStyled = styled.header`
  background-color: ${prop => {
    const { theme } = useChangeTheme();
    console.log(prop.theme.color);
    console.log(theme);
    return prop.theme.color[theme].mainBG;
  }};
`;

export { HeaderStyled };
