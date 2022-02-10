import styled from "styled-components";


//styled de Produtos
export const ProductsContainer = styled.div`

`;

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;
`

//ProductCard

export const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`

export const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
`