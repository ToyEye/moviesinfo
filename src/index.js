import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from 'components/App/App';
import { theme } from 'style/theme';
import { GlobalStyled } from 'style/GlobalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <GlobalStyled />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
