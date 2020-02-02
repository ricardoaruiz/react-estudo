import './Todo.scss';

import React from 'react';

import PageHeader from '../template/page-header/PageHeader';
import TodoForm from './todo-form/TodoForm';
import TodoList from './todo-list/TodoList';
import TodoService from './TodoService';

export default class Todo extends React.Component {

    state ={
        description: '',
        list: []
    }

    handleDescriptionInput = description => {
        this.setState({ description });
    }

    handleAdd = () => {
        if (!this.state.description) return;
        
        TodoService.create({
            description: this.state.description,
            done: false,
            date: new Date().toLocaleString()
        })
        .then(() => {
            this.setState({ description: '' });
            this.search()
        })
        .catch(error => console.log('Todo - Erro ao criar a task'));
    }

    handleSearch = () => {
        this.search();
    }

    handleClear = () => {
        this.setState( { description: '', list: [] }, () => this.search() );
    }

    handleDelete = task => {
        TodoService.delete(task)
            .then(() => this.search())
            .catch(error => console.log('Delete error', error));
    }

    handleChangeState = obj => {
        TodoService.markAsDone({ ...obj.task, done: obj.done })
            .then(() => this.search())
            .catch(error => console.log('Mark as done error', error));
    }

    search = () => {
        TodoService.search({ description: this.state.description })
            .then(result => this.setState({ list: result.data }))
            .catch(error => console.log('Todo - Erro ao consultar tasks'))
    }

    componentDidMount() {
        this.search();
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />

                <TodoForm 
                    description={this.state.description}
                    onDescriptionInput={this.handleDescriptionInput}
                    onAdd={this.handleAdd}
                    onSearch={this.handleSearch}
                    onClear={this.handleClear}
                />
                
                <TodoList 
                    list={this.state.list}
                    onDelete={this.handleDelete}
                    onChangeState={this.handleChangeState}
                />
            </div>

            
        )
    }

}