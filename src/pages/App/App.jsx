import React from 'react';
import { Container,Navbar,ProfileContainer,Image,Title, Link } from './Style.jsx';


export function App(){
    return(
        <Container>
            <Navbar>
                <ProfileContainer>
                    <Image src='' />
                    <Title>
                        Very Flores
                    </Title>
                </ProfileContainer>
                <Link>
                    HOME
                </Link>
                <Link>
                    ABOUT
                </Link>
                <Link>
                    MORE
                </Link>
                <Link>
                    CONTACT
                </Link>
            </Navbar>
        </Container>
    )
}