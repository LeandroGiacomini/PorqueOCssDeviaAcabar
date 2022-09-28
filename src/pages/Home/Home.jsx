import React from 'react';
import { Foter } from '../Components/footer/Footer.jsx';
import { App } from '../Components/Navbar/Navbar.jsx';
import { Alinha, Centro, Conteudo, Principal, Secundario } from './Style.jsx';

export function Home(){
    return(
            <Conteudo >
                <App />
                <Centro>
                    
                    <Principal>
                        teste
                    </Principal>
                    
                    <Alinha>
                        <Secundario>
                            Teste
                        </Secundario>

                        <Secundario>
                            Teste
                        </Secundario>

                        <Secundario>
                            Teste
                        </Secundario>
                    </Alinha>
                </Centro>
                <Foter />
           </Conteudo>
        
    )
}