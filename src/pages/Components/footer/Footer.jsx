import React from 'react';
import { Footer, itemAbout, itemPara } from './style';


export function Foter(){
    return(
            <Footer>
                <div>
                    <itemAbout ><b>&nbsp;&nbsp;SOBRE NÓS</b></itemAbout>
                    <br></br>
                    <itemPara>Liber é um site voltado para leitura.</itemPara>
                    <br></br>
                </div>
            </Footer>
    )
}