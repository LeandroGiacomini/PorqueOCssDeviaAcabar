import React from 'react';
import { Container, Navbar, ProfileContainer, Image, Title, Link, Links } from './Style.jsx';
import Logo from '../../../assets/livro.svg';

// Navbar com o nome App por causa do styled-components que dava dando erro por causa do mesmo nome
export function App() {
    return (

            <Navbar>
                <ProfileContainer>
                    <Image src={Logo} />
                    <Title>
                        Liber
                    </Title> 
                </ProfileContainer>
                <Links>
                    <Link>
                        <a href='#' className='link'>HOME</a>
                    </Link>
                    <Link>
                        <a href='#' className='link'>SOBRE</a>
                    </Link>
                    <Link>
                        <a href='#' className='link'>LOGIN</a>
                    </Link>
                    <Link>
                        <a href='#' className='link'>CADASTRO</a>
                    </Link>
                </Links>
            </Navbar>

    );
}
