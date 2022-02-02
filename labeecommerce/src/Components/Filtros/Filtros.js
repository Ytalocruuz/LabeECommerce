import React from "react";
import styled from "styled-components";

export const GrupoDeFiltros = styled.div`

 border: 1px solid black;
`

class Filtros extends React.Component {
    render() {
        return <GrupoDeFiltros>
            <label>
                Filtros Minimo:
                <input type={"number"} />
            </label>
            <label>
                Filtros Máximo:
                <input type={"number"} />
            </label>
            <label>
                Busca por  nome:
                <input type={"text"} />
            </label>
        </GrupoDeFiltros>
    }
}

export default Filtros; 