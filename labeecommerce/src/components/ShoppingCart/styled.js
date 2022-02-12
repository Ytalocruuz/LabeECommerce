import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  border: 1px solid transparent;
  padding: 8px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

export const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  font-family: 'Open Sans Condensed', sans-serif;

  p {
    margin: 0;
  }
`

export const Button = styled.button`

font-family: 'Open Sans Condensed', sans-serif;
`