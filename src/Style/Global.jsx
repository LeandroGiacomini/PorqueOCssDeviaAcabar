import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html,body{
        max-height: 100vh;
        max-width: 100vw;
        text-rendering: optimizeLegibility;
        font-family: cursive;
    }
    html{
        font-size: 62.5%;
    }
    #root{
        height: 100%;
        width: 100%;
    }
    .link{
        text-decoration: none;
    }
    a{
        color: #333333;
    }
`;

export default GlobalStyle;

// Celular  = 600px
// Tablet  = 768px
//                  -->   width
// Laptop  = 992px
// Desktop  = 1200px