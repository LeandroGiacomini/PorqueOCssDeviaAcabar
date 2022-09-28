import React from 'react';
import { Foter } from '../Components/footer/Footer.jsx';
import { App } from '../Components/Navbar/Navbar.jsx';
import { Centro, Conteudo, Principal, Secundario } from './Style.jsx';

export function Home(){
    return(
            <Conteudo >
                <App />
                <Centro>
                    <Principal>
                        teste
                    </Principal>

                    <Secundario>
                        Teste
                    </Secundario>

                    <Secundario>
                        Teste
                    </Secundario>

                    <Secundario>
                        Teste
                    </Secundario>
                </Centro>
                <Foter />
           </Conteudo>
        
    )
}