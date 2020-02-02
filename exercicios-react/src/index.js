import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import PrimeiroComponente from './components/PrimeiroComponente';
import CompA, { CompB } from './components/DoisComponentes';
import MultiElementos from './components/MultiElementos';
import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Membro from './components/Membro';
import ComponenteComFuncao from './components/ComponenteComFuncao';
import Pai from './components/Pai';
import ComponenteClasse from './components/ComponenteClasse';
import Contador from './components/Contador';
import Hooks from './components/Hooks';
import Field from './components/com-redux/field/Field';

// Redux ==================================================
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';
import Counter from './components/com-redux/counter/Counter';
// Redux ==================================================

const variavel = 'GDGDGDG';

ReactDOM.render(
    <div>
        <Provider store={createStore(reducers)}>
            <Field />
            <hr/>
            <Counter />
            <hr/>
        </Provider>

        <PrimeiroComponente valor={variavel}/>
        <hr/>

        <CompA valor="Sou o componente A"/>
        <CompB valor="Sou o componente B"/>
        <hr/>

        <MultiElementos/>
        <hr/>

        <FamiliaSilva />
        <hr/>

        {/* Componente tipo container propagando propriedades para os filhos */}
        <Familia sobrenome="Carvalho Ruiz">
            <Membro nome="Cinthya"/>
            <Membro nome="Guilherme"/>
            <Membro nome="Ricardo"/>
        </Familia>
        <hr/>

        {/* Componente funcional com funções internas */}
        <ComponenteComFuncao />
        <hr/>

        {/* Comunicação entre componentes (Filho para Pai) */}
        <Pai />
        <hr/>

        {/* Componente baseado em classe */}
        <ComponenteClasse valor="Parametro informado"/>
        <hr/>

        {/* Componente com estado e métodos */}
        <Contador valorInicial={5}/>
        <hr/>

        {/* Function component utilizando Hooks  */}
        <Hooks valorInicial={2}/>
        <hr/>
        
    </div>
    ,document.getElementById('root'));
