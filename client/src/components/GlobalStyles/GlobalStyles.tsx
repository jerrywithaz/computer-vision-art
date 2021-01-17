import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, 
    body,
    #root {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    body {
        margin: 0px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyles;
