import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * { margin:0; padding: 0; box-sizing: border-box; outline:0; }

  body {
    background: #fff;
    color: #00649a;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', serif;
    font-size: 14px;
  }

  h1, h1, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button { cursor: pointer; }
`;
