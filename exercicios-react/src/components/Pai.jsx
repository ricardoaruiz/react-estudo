import React from 'react';
import Filho from './Filho';

export default props => {

    const liberarSaida = 
        lugar => alert(`Liberado para ${lugar}`)

    return (
        <Filho notificarSaida={liberarSaida} />
    )

}