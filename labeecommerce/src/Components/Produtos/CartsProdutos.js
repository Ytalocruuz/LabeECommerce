import React from "react";
import { AddButton, CardContainer, CardInfo} from "./styled";

export class CartsProdutos extends React.Component{
    render(){

        const product = this.props.product

        return <CardContainer>
            <img src={product.phone} alt="card" />
            <CardInfo>
               <p>{product.nome}</p>
               <p>R${product.price},00</p> 
               <AddButton>Adicionar ao carinho</AddButton>
            </CardInfo>
        </CardContainer>
    }
}