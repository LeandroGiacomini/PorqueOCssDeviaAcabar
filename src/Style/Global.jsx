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
        min-height: 100vh;
        min-width: 100vw;

        text-rendering: optimizeLegibility;
        font-family: cursive;
    }
    html{
        font-size: 62.5%;
    }
    #root{
        max-height: 100vh;
        max-width: 100vw;
        min-height: 100vh;
        min-width: 100vw;
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