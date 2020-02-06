import './Home.scss';
import Main from '../template/main/Main';

import React from 'react';

const Home = props => {
    return (
        <Main
            icon="home"
            title="Início"
            subtitle="Segundo projeto do capítulo de React"
        >
            <div className="display-4">Bem vindo!</div>
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React</p>
      </Main>
    );
}
 
export default Home;