import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    background-color: ${(props) => props.theme.color.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1{
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4rem;
  }

  h2{
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.5rem;
  }

  h3{
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
  }

  h4{
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
  }

  h5{
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
  }

  h6: {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
  }

  a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
