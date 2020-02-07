import './User.scss';

import React, { Component } from 'react';
import Main from '../template/main/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

class User extends Component {
    
    state = {  }

    componentDidMount() {

    }

    render() { 
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        );
    }
}
 
export default User;
