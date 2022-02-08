import React from "react";
import { ItemCarinho } from "./ItemCarinho";
import { CartListContainer, ContainerCarinho } from "./styled";

export class Carinho extends React.Component {

    getTotalValue = () => {
        let totalValue = 0

        for(let product of this.props.productsInCart){
            totalValue += product.price * product.quantity
        }

        return totalValue
    }
    render() {
        return <ContainerCarinho>
            <h3>Carinho:</h3>
            <CartListContainer>

                {this.props.productsInCart.map((product) => {
                    return <ItemCarinho cartItem={product}/>
                })}
            </CartListContainer>

            <p>Valor total: R${this.getTotalValue()}00</p>
        </ContainerCarinho>
    }

}