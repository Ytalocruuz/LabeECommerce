import React from "react";
import { ItemContainer } from "./styled";

export class ItemCarinho extends React.Component{
    render(){
        return <ItemContainer>
            <p>1x</p>
            <p>Produto</p>
            <button>Remover itens</button>
        </ItemContainer>
    }
}