import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/roboto-v30-latin-regular.woff2') format('woff2'); 
}
/* roboto-500 - latin */
@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('fonts/roboto-v30-latin-500.woff2') format('woff2'); 
}
/* roboto-700 - latin */
@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('fonts/roboto-v30-latin-700.woff2') format('woff2'); 
}
/* roboto-900 - latin */
@font-face {
  font-display: swap; 
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url('fonts/roboto-v30-latin-900.woff2') format('woff2'); 
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{

    font-family: 'Roboto',sans-serif;
}

a{
  text-decoration: none;
  color: inherit;
}

ul{
  list-style: none;
}

`;
