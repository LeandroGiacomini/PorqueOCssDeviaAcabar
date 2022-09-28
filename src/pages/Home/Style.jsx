import styled from "styled-components";

export const Conteudo = styled.div`

    background-color: #ccc;
    max-height: 100%;
    max-width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

`;

export const Centro = styled.div`

    display: flex;
    flex-direction: row;
    flex-grow: 5;
    max-height: 100%;
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;

`;

export const Principal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #fff;
    max-height: 100%;
    max-width: 100%;
    min-width: 30%;
    margin: 1%;
    min-height: 50% ;
`;


export const Alinha = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 5;
    justify-content: center;
    max-height: 50%;
    max-width: 50%;
    min-height: 40%;
    min-width: 65%;
`


export const Secundario = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #fff;
    margin: 1%;
    min-width: 30%;
    min-height: 10%;

`;

export const Livros = styled.p`

background-color: blue;
width: 100%;

`;