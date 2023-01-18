import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --blue-2: #4d81c1
    --blue-1: #5d9cec
    --blue-0: #afcdf3
    --gray-4: #202020;
    --gray-3: #656565;
    --gray-2: #7e7e7e;
    --gray-1: #cecece;
    --gray-0: #f5f7fa;
    --success: #3FE864;
    --negative: #E83F5B;
    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body, html{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--gray-0);
    color: var(--gray-3);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea, select, option, a {
    font-family: 'Trebuchet MS';
    font-size: 1.6rem;
    text-decoration: none;
    color: var(--gray-3);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 1.6rem;
    border: 2px solid var(--color-background);
    background: rgb(0,0,0, 0.5);
  }
`;
