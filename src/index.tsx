import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GoogleLoginContextProvider } from './store/GoogleLoginContext';
import theme from './theme/styled-components/theme';
import GlobalStyle from './theme/styled-components/global.css';
import './theme/bootstrap/custom.scss';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <GoogleLoginContextProvider>
        <App />
      </GoogleLoginContextProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
