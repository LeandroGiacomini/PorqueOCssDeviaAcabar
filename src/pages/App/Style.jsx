import styled from "styled-components";


const Container = styled.div`

    background-color: grey;
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

    max-width: 100%;
    min-height: 10%;

    display: flex;
    justify-content: space-between;

`;

const ProfileContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

`;

const Image = styled.img`

    width: 10rem;
    height: 10rem;

`;

const Title = styled.h2`

    font-size: 2rem;

`;

const Links = styled.ul`

    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;

`;

const Link = styled.li``;



export {Container, Navbar, ProfileContainer, Image, Title, Link , Links};