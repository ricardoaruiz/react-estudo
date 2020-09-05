import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, p, ul, li {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
`;