import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';
import Cast from 'components/Cast';
import Review from 'components/Review';

import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Library from 'pages/Library';
import MovieDetails from 'pages/MovieDetails';

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
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:movieDetails" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="library" element={<Library />} />

          <Route path="*" element={<Navigate path="/" replace={true} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
