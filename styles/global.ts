import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-family: ${(props) => props.theme.brand.font.family};
    }
    
    :root {
    font-size: 62.5%;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }    

    body {
    font-size: 1.6rem;
    width: 100vw;
    height: 100vh;
    }
 `;

export default GlobalStyle;
