import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global.css';
import 'semantic-ui-css/semantic.min.css';
import theme from './theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
