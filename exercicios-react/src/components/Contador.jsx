import React from 'react';

export default class Contador extends React.Component {

    static displayName = "Contador";

    state = {
        contador: this.props.valorInicial || 0
    };

    incrementar = () => {
        this.alterarNumero(1);
    }

    decrementar = () => {
        this.alterarNumero(-1);
    }

    alterarNumero = valor => {
        this.setState({ contador: this.state.contador + valor });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.alterarNumero(-5)}>-5</button>
                <button onClick={this.decrementar}>-1</button>

                <span>{this.state.contador}</span>

                <button onClick={this.incrementar}>+1</button>
                <button onClick={() => this.alterarNumero(5)}>+5</button>
            </div>
        )
    }
}