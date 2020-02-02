import React from 'react';


export default props => {

    const aprovados = ['Ricardo', 'Cinthya', 'Guilherme'];

    const gerarItens = itens => {
        return itens.map((item, index) => 
            <li key={index}>
                {item}-{index}
            </li>
        )
    }

    return (
        <div>
            <h2>Aprovados</h2>
            <ul>
                {gerarItens(aprovados)}
            </ul>
        </div>
    );
}