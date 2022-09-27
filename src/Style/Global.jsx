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



    /*
    
    Apenas um teste
    
    */
    .container-footer{
    background-color: #ffafcc;
    font-size: larger;
    color: #fe9001;
    width: 100%;
    height: 13vh;
    text-align: center;
    font-family: 'Sen', sans-serif;
    position: absolute;
    align-items: center;
    justify-content: center;
    height: 100px;
    bottom: 0;
    left: 0;
   
    
    
}
#item-logo{
    width: 12%;
    margin: 1.5%;
    margin-left: 3%;
    
}
#item-about{
    color: #2b2b2b;
    font-size: 2em;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    
}

#item-paragraph{
    color: black;

} 

`;

export default GlobalStyle;

// Celular  = 600px
// Tablet  = 768px
//                  -->   width
// Laptop  = 992px
// Desktop  = 1200px