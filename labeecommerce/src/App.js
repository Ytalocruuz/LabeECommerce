import React from 'react'
import {  ContainerPrincipal, TituloPrincipal } from './AppStyled';
import { Carinho } from './Components/Carinho/Carinho';
import Filtros from './Components/Filtros/Filtros';
import { Produtos } from './Components/Produtos/Produtos';
import {pacoteDeProdutos} from './pacoteDeProduto';


class App extends React.Component {

  state = {
    filtroMinimo: 0,
    filtroMaximo: 0,
    filtroBuscarPorNome: ""
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

    const pacoteFiltradosMinimo = pacoteDeProdutos.filter(produto => {
      if (this.state.filtroMinimo) {
        return produto.price >= this.state.filtroMinimo
      }
    })

    const pacoteFiltradosMaximo = pacoteDeProdutos.filter(produto => {
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

        <Produtos produtos = {pacoteDeProdutos} />
        <Carinho />
      </ContainerPrincipal>

    </div>
  }
}

export default App;
