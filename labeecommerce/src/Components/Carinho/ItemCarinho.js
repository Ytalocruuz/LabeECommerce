import React from "react";
import { ItemContainer } from "./styled";

export class ItemCarinho extends React.Component{
    render(){
        return <ItemContainer>
            <p>{this.props. cartItem.quantity}X</p>
            <p>{this.props.cartItem.name}</p>
            <button>Remover itens</button>
        </ItemContainer>
    }
}