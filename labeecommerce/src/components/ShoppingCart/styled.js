import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
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

  p {
    margin: 0;
  }
`