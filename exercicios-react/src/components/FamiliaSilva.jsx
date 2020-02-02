import React from 'react';
import Membro from './Membro';

const FamiliaSilva = props =>
    <div>
        <Membro nome="João" sobrenome="Silva" />
        <Membro nome="Maria" sobrenome="Silva" />
        <Membro nome="Antonio" sobrenome="Silva" />
    </div>

FamiliaSilva.displayName = "FamiliaSilva";

export default FamiliaSilva;