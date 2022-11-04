import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import Forest from '../images/forest.jpg';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'NotoSerifKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NotoSerifKR.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  body {
    font-family: 'NotoSerifKR', sans-serif;
    background-image: url(${Forest});
    background-size: 100% 100%;
  }

  button {
    font-family: 'NotoSerifKR', sans-serif;
  }

  input {
    font-family: 'NotoSerifKR', sans-serif;
  }

  textarea {
    font-family: 'NotoSerifKR', sans-serif;
  }
`;

export default GlobalStyles;
