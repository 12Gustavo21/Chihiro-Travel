import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: url(https://www.cursor.cc/cursor/12/193/cursor.png), default;
    }
    
    *::selection {
        background-color: #f1a5b1;
        color: #878787;
    }
    
    body {
        background: linear-gradient(149deg, #0b0a0a 0%, #2d1607 100%) center center no-repeat fixed;
        overflow: hidden;
    }
`;
