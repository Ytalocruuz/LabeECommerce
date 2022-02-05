import React from "react";
import { ItemCarinho } from "./ItemCarinho";
import { ContainerCarinho } from "./styled";

export class Carinho extends React.Component {
    render() {
        return <ContainerCarinho>
            Carinho
            <ItemCarinho />
        </ContainerCarinho>
    }

}