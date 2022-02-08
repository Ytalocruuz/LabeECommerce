import React from "react";
import { CartsProdutos } from "./CartsProdutos";
import { ContainerProdutos, ProdutosGrid, ProdutosHeader } from "./styled";


export class Produtos extends React.Component {


    state = {
        sort: 'CRESCENTE'
    }

    getFilteredAndOrderedList = () => {
        return this.props.products
            .filter((product) => product.price < this.props.filtroMinimo)
            .filter((product) => product.price > this.props.filtroMaximo)
            .filter((product) => product.nome.includes(this.props.filtroBuscarPorNome))
            .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)

    }
    render() {
        const filteredAndOrderedList = this.getFilteredAndOrderedList()
        return <ContainerProdutos>

            <ProdutosHeader>

                <p>Quantidade de Produtos: {this.getFilteredAndOrderedList.length}</p>
                <label>
                    Ordenação:
                    <select value={this.state.sort}>
                        <option value={'CRESCENTE'}>Crescente</option>
                        <option value={'DECRESCENTE'}>Decrescente</option>
                    </select>
                </label>
            </ProdutosHeader>

            <ProdutosGrid>
                {filteredAndOrderedList.map((product) => {
                    return <CartsProdutos product={product} />
                })}
            </ProdutosGrid>
        </ContainerProdutos>
    }
}