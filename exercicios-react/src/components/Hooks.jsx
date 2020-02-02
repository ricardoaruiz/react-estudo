import React, { useState, useEffect } from 'react';

export default props => {

    const [ contador, setContador] = useState(props.valorInicial || 0);
    const [ parImpar, setParImpar] = useState('Par');

    useEffect(() => {
        setParImpar(contador % 2 === 0 ? 'Par' : 'Impar');
    });

    return (
        <div>
            <h1>{contador}</h1>
            <h2>{parImpar}</h2>
            <button onClick={() => setContador(contador - 1)}>-1</button>
            <button onClick={() => setContador(contador + 1)}>+1</button>
        </div>
    );

}