import React from 'react';
import { Container,Navbar,ProfileContainer,Image,Title, Link,Links } from './Style.jsx';
import Logo from '../assets/panic.svg';

export function App(){
    return(
        <Container>
            <Navbar>
                <ProfileContainer>
                    <Image src={Logo} />
                    <Title>
                        Very Flores
                    </Title>
                </ProfileContainer>
                <Links>
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
                </Links>
            </Navbar>
        </Container>
    )
}