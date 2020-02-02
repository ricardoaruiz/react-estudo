import React from 'react';

const Membro = props =>
    <div>
      {props.nome}
      <strong> {props.sobrenome}</strong>
    </div>

Membro.displayName = "Membro"

export default Membro;