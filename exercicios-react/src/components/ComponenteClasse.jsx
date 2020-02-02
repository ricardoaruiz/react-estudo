import React, { Component } from 'react';

export default class ComponenteClasse extends Component {

    static displayName = "ComponenteClasse";

    render() {
        return  <p>
                    Componente Classe 
                    <strong>{this.props.valor || 'Não recebi parametro'}</strong>
                </p>
    }

}