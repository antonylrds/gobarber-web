import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, strong {
    font-weight: 500;
  }

  h1{
    font-size: 2em
  }
  h2{
    font-size: 1.5em
  }
  h3{
    font-size: 1.17em
  }
  h4{
    font-size: 1em
  }
  h5{
    font-size: 0.83em
  }
  h6{
    font-size: 0.75em
  }


  button {
    cursor: pointer;
  }
`;
