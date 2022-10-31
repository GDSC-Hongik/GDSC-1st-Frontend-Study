import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      point: {
        lavender: '#a368ec';
      };

      mono: {
        white: '#fff';
        gray_fa: '#fafafa';
        gray_f5: '#f5f5f5';
        gray_f0: '#f0f0f0';
        gray_dd: '#dbdddf';
        gray_99: '#999999';
      };
    };
    typo: {};
  }
}
