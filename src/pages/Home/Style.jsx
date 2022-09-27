import styled from "styled-components";

export const Conteudo = styled.section`

background-color: #ccc;
    height: none;
    display: flex;
    flex-direction: column;

`;

export const Article = styled.article`

    background-color: #333;
    color: #fff;
    padding: 20px;
    margin: 5px;
    height: 30px;
    flex-grow: 0;
    flex-basis: 20px;
    flex-shrink: 1;
    flex-grow: 3;

`;

export const Centro = styled.p`

    display: flex;
    flex-direction: row;
    flex-grow: 5;

`;

export const Livros = styled.p`

background-color: blue;
width: 100%;

`;