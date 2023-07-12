import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import Tranding from 'pages/Tranding';
import Library from 'pages/Library';

import ThemeProvider from 'helpers/ThemeProvider';
import { GlobalStyled } from 'style/GlobalStyled';
import { useLocalStorage } from 'hooks/useLocalStorage';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', {
    theme: 'dark',
    checked: false,
  });

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme.theme === 'light'
        ? { theme: 'dark', checked: false }
        : { theme: 'light', checked: true }
    );
  };

  return (
    <ThemeProvider theme={theme.theme}>
      <GlobalStyled />

      <Routes>
        <Route
          path="/"
          element={<Layout toggleTheme={toggleTheme} checked={theme.checked} />}
        >
          <Route index element={<Home />} />
          <Route path="catalog" element={<Tranding />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
