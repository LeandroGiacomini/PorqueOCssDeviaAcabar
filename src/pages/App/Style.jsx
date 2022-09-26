import styled from "styled-components";


const Container = styled.div`

    height: 20rem;
    display: flex;
    flex-direction: row;

    @media (min-width:600px ;) {
        flex-direction: column;
    }

`;

const Navbar = styled.div`

    max-width: 100%;

    display: flex;
    flex-direction: row;
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


`;

const Link = styled.li``;



export {Container, Navbar, ProfileContainer, Image, Title, Link , Links};