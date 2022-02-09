import styled from "styled-components";


//styled de Produtos
export const ContainerProdutos = styled.div`
  /* border: 1px solid black; */

`

export const ProdutosHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 17px;

`
export const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px ;
`
//Styled de Cards
export const CardContainer = styled.div`
   border: 1px solid black;
   display: flex;
   flex-direction: column; 
   padding: 10px;
`

export const CardInfo = styled.div`
   display: flex;
   flex-direction: column; 
   margin-top: 5px;

   p {
     margin:  4px 0;
   }
`

export const AddButton = styled.button`
   align-self: center;
   margin-top: 4px;
`