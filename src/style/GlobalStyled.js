import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`


/* montserrat-regular - latin */
@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/montserrat-v25-latin-regular.woff2') format('woff2'); 
}
/* montserrat-500 - latin */
@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('fonts/montserrat-v25-latin-500.woff2') format('woff2'); 
}
/* montserrat-700 - latin */
@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('fonts/montserrat-v25-latin-700.woff2') format('woff2'); 
}
/* montserrat-900 - latin */
@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  src: url('fonts/montserrat-v25-latin-900.woff2') format('woff2'); 
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body{
    font-family: 'Montserrat',sans-serif;
    background-color: ${({ theme }) => theme.color.mainBG};
    position: relative; 


}

a{
  text-decoration: none;
  color: inherit;
}

ul{
  list-style: none;
}

img{
  display: block;
  max-width:100%;
  height:auto;
}

`;
