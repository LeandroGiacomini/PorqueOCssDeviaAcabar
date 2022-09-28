import styled from "styled-components";

export const Conteudo = styled.div`

    background-color: #ccc;
    max-height: 100%;
    max-width: 100%;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;

`;

export const Centro = styled.div`

    display: flex;
    flex-direction: row;
    flex-grow: 5;
    min-width: 50vw;

`;

export const Principal = styled.div`

    background-color: #333;
    color: #fff;

    margin: 5px;
    min-width: 100%;
    max-height: 100%;
    min-height:100% ;
`;




export const Secundario = styled.div`

    background-color: #333;
    color: #fff;
    padding: 20px;
    margin: 5px;
    height: 60%;

`;

export const Livros = styled.p`

background-color: blue;
width: 100%;

`;