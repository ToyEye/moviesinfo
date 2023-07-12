import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'style/themes';

const ThemeProvider = ({ children, theme }) => {
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return <SCThemeProvider theme={selectedTheme}>{children}</SCThemeProvider>;
};

export default ThemeProvider;
