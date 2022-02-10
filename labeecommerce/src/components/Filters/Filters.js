import React from 'react'
import { FiltersContainer, InputContainer, Titlefilter } from './styled.js'


export class Filters extends React.Component {
  render() {
    return <div>
      <Titlefilter>
        <h2>Filtros</h2>
      </Titlefilter>
      <FiltersContainer>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
      </FiltersContainer>
    </div>
  }
}
