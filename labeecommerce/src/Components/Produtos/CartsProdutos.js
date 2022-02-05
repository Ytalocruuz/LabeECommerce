import React from "react";
import { AddButton, CardContainer, CardInfo} from "./styled";

export class CartsProdutos extends React.Component{
    render(){
        return <CardContainer>
            <img src={'https://picsum.photos/200/200'} alt="card" />
            <CardInfo>
               <p>Produto</p>
               <p>R$100,00</p> 
               <AddButton>Adicionar ao carinho</AddButton>
            </CardInfo>
        </CardContainer>
    }
}