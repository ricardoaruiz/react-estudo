import './User.scss';

import React, { Component } from 'react';

import ToastrService from '../../shared/service/ToastrService';
import { handleApiErrors } from '../../shared/utils/errorHandlers';
import Main from '../template/main/Main';
import UserService from './UserService';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const initialState = {
    user: { name: '', email: ''},
    list: []
}

const crudOperation = {
    insert: 'insert',
    update: 'update',
    delete: 'delete'
}

class User extends Component {
    
    state = { ...initialState }

    componentDidMount() {
        this.list();
    }

    handleInputChange = (event) => {
        this.setState({ user: { ...this.state.user, [event.target.name]: event.target.value } });
    }

    clear = () => {
        this.setState({ user: initialState.user });
    }

    list = () => {
        UserService.list()
            .then(users => this.setState({ list: users }))
            .catch(error => handleApiErrors('List', error.errors));
    }

    save = (event) => {
        event.preventDefault();
        const user = this.state.user;
        const method = user.id ? crudOperation.update : crudOperation.insert;
        UserService[method](user)
            .then(user => {
                this.list();
                this.clear();
                ToastrService.success({title: 'Sucesso', message: 'Usuário salvo com sucesso'});
            })
            .catch(error => handleApiErrors('Create', error.errors));
    }

    delete = (user) => {
        UserService.delete(user)
            .then(() => {
                this.list();
                this.clear();
                ToastrService.success({title: 'Sucesso', message: 'Usuário removido com sucesso'});
            })
            .catch(error => handleApiErrors('Delete', error.errors));
    }

    loadForUpdate = (user)  => {
        this.setState({ user });
    }

    updateList = (user, operation = crudOperation.insert) => {
        const list = [ ...this.state.list ];

        switch (operation) {
            case crudOperation.insert:
                list.push(user)   
                break;
            case crudOperation.delete:
                list.splice(list.indexOf(user), 1)   
                break;
            default:
                const u = list.find(u => u.id === user.id);
                Object.assign(u, user);
                break;
        }

        this.setState({ list });
    }

    renderForm = () => (
        <form onSubmit={this.save}>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" className="form-control" 
                                value={this.state.user.name} onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" name="email" className="form-control" 
                                value={this.state.user.email} onChange={this.handleInputChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2">Confirmar</button>
                        <button type="button" className="btn btn-secondary" onClick={this.clear}>Limpar</button>
                    </div>
                </div>
            </div>
        </form>
    )

    renderTable = () => (
        <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>                    
                    <th>Ações</th>                    
                </tr>
            </thead>
            <tbody>
                {this.renderUsersTableRows()}
            </tbody>
        </table>
    );

    renderUsersTableRows = () => {
        const list = this.state.list || [];
        return list.map(user => 
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="actions">
                    <button className="btn btn-primary mr-1" onClick={() => this.loadForUpdate(user)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.delete(user)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>    
        )
    }

    render() { 
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        );
    }
}

export default User;
