import styled from "styled-components";


const Container = styled.div`

    background-color: #ffafcc;
    display: flex;
    flex-direction: row;
    max-height: 100%;
    min-height: 100%;
    @media (min-widht: 600px) {
        #root{
            display: flex;
        }
        
    }

`;

const Navbar = styled.div`

    background-color: #ffafcc;
    width: 100%;
    margin-right: 100%;
    display: flex;
    justify-content: space-between;


`;

const ProfileContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

`;

const Image = styled.img`

    width: 7rem;
    height: 7rem;

`;

const Title = styled.h2`

    font-size: 2rem;

`;

const Links = styled.ul`

    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    font-size: 16px;
    font-weight: bold;
    font-family: Comic Sans MS, Comic Sans, cursive;

`;

const Link = styled.li`



`;

export const link = styled.a`

    text-decoration: none;
    font-size: 50px;

`;

export {Container, Navbar, ProfileContainer, Image, Title, Link , Links};