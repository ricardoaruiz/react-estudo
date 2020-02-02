import './Todo.scss';

import React from 'react';

import PageHeader from '../template/page-header/PageHeader';
import TodoForm from './todo-form/TodoForm';
import TodoList from './todo-list/TodoList';

const Todo = props => {
    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm />                
            <TodoList />
        </div>
    )
}

Todo.displayName = 'Todo';

export default Todo;