import React from 'react';
import { Container,Navbar,ProfileContainer,Image,Title, Link,Links} from './Style.jsx';
import Logo from '../../assets/logo.svg'


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
                        <a href='#' className='link' >HOME</a>
                    </Link>
                    <Link>
                        <a href='#' className='link' >SOBRE</a>
                    </Link>
                    <Link>
                        <a href='#' className='link' >LOGIN</a>
                    </Link>
                    <Link>
                        <a href='#' className='link' >CADASTRO</a>
                    </Link>
                </Links>
            </Navbar>
        </Container>
    )
}