import React from "react";
import { CartsProdutos } from "./CartsProdutos";
import { ContainerProdutos, ProdutosGrid, ProdutosHeader } from "./styled";


export class Produtos extends React.Component {
    render() {
        return <ContainerProdutos>

            <ProdutosHeader>

                <p>Quantidade de Produtos: 4</p>
                <label>
                    Ordenação:
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </label>
            </ProdutosHeader>

            <ProdutosGrid>
                <CartsProdutos />
                <CartsProdutos />
                <CartsProdutos />
                <CartsProdutos />
                <CartsProdutos />
                <CartsProdutos />
            </ProdutosGrid>
        </ContainerProdutos>
    }
}