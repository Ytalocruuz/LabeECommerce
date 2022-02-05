import React from "react";
import { ItemCarinho } from "./ItemCarinho";
import { CartListContainer, ContainerCarinho } from "./styled";

export class Carinho extends React.Component {
    render() {
        return <ContainerCarinho>
            <h3>Carinho:</h3>
            <CartListContainer>
            <ItemCarinho />
            <ItemCarinho />
            <ItemCarinho />
            <ItemCarinho />
            </CartListContainer>

            <p>Valor total: R$100:00</p>
        </ContainerCarinho>
    }

}