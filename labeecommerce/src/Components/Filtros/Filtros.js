import React from "react";
import { Filtro, GrupoDeFiltros } from "./styled-filtro";




class Filtros extends React.Component {
    render() {
        return <GrupoDeFiltros>

            <h2>Filtros</h2>
            <Filtro>
                Filtros Minimo:
                <input type={"number"}
                    value={this.props.minimo}
                    onChange={this.props.onChangeMinimo} />
            </Filtro>
            <Filtro>
                Filtros Máximo:
                <input type={"number"}
                    value={this.props.maximo}
                    onChange={this.props.onChangeMaximo} />
            </Filtro>
            <Filtro>
                Busca por  nome:
                <input type={"text"}
                    value={this.props.buscaPorNome}
                    onChange={this.props.onChangeBuscarPorNome} />
            </Filtro>
        </GrupoDeFiltros>
    }
}

export default Filtros; 