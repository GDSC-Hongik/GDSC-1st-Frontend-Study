import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <App />
        </RecoilRoot>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
