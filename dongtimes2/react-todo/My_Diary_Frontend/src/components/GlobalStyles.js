import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import Boyeong from '../fonts/Boyeong.woff2';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: Boyeong;
    src: url(${Boyeong}) format('woff2');
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  input {
    font-family: 'Noto Sans KR', sans-serif;
  }

  textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles;
