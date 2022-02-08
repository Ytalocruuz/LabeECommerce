import React from 'react'
import { ContainerPrincipal, TituloPrincipal } from './AppStyled';
import { Carinho } from './Components/Carinho/Carinho';
import Filtros from './Components/Filtros/Filtros';
import { Produtos } from './Components/Produtos/Produtos';
import { products } from './product';


class App extends React.Component {

  state = {
    filtroMinimo: 100,
    filtroMaximo: 1000,
    filtroBuscarPorNome: "",
    productsInCart: [
      {
        id: 2,
        nome: "Produto legal 2",
        price: 233,
        phone: 'https://picsum.photos/200/200',
        quantity: 1
      },
      {
        id: 2,
        nome: "Produto legal 2",
        price: 233,
        phone: 'https://picsum.photos/200/200',
        quantity: 1
      },
      {
        id: 2,
        nome: "Produto legal 2",
        price: 233,
        phone: 'https://picsum.photos/200/200',
        quantity: 1
      }
    ]
  }

  manipularValorDoFiltroMinimo = (event) => {
    // console.log(event.target.value)
    this.setState({
      filtroMinimo: event.target.value
    })
  }

  manipularValorDoFiltroMaximo = (event) => {
    // console.log(event.target.value)
    this.setState({
      filtroMaximo: event.target.value
    })
  }
  manipularValorDoFiltroBuscarPorNome = (event) => {
    // console.log(event.target.value)
    this.setState({
      filtroBuscarPorNome: event.target.value
    })
  }
  render() {

    const pacoteFiltradosMinimo = products.filter(produto => {
      if (this.state.filtroMinimo) {
        return produto.price >= this.state.filtroMinimo
      }
    })

    const pacoteFiltradosMaximo = products.filter(produto => {
      if (this.state.filtroMaximo) {
        return produto.price <= this.state.filtroMaximo
      } else {
        return produto
      }
    })

    console.log(pacoteFiltradosMaximo)

    return <div>

      <TituloPrincipal><h1>LabECommerce</h1></TituloPrincipal>

      <ContainerPrincipal>
        <Filtros
          minimo={this.state.filtroMinimo}
          maximo={this.state.filtroMaximo}
          buscaPorNome={this.state.filtroBuscarPorNome}

          onChangeMinimo={this.manipularValorDoFiltroMinimo}
          onChangeMaximo={this.manipularValorDoFiltroMaximo}
          onChangeBuscarPorNome={this.manipularValorDoFiltroBuscarPorNome}
        />

        <Produtos products={products}
          minimo={this.state.filtroMinimo}
          maximo={this.state.filtroMaximo}
          buscaPorNome={this.state.filtroBuscarPorNome} />
        <Carinho 
        productsInCart={this.state.productsInCart}/>
      </ContainerPrincipal>

    </div>
  }
}

export default App;
