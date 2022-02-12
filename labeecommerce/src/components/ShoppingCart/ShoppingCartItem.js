import React from 'react'
import { ItemContainer, Button } from './styled'




export class ShoppingCartItem extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.cartItem.quantity}x</p>
      <p>{this.props.cartItem.name}</p>
      <Button 
        onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
      >
        Remover
      </Button>
    </ItemContainer>
  }
}

