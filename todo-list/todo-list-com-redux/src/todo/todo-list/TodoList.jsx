import './TodoList.scss';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeState, remove } from '../todo-actions';

import IconButton from '../../template/icon-button/IconButton';

const TodoList = props => {

    const renderRows = () => {
        const data = props.list ? [...props.list] : [];

        return !data.length
            ? (
                <tr>
                    <td className="colspan-2 text-center">Não existem tasks</td>
                </tr>
            )
            : data.map(task => (
                <tr key={task.id}>
                    <td>
                        <span className={task.done ? 'done' : ''}>
                            {task.description}
                        </span>
                    </td>
                    <td className="d-flex">
                        <IconButton 
                            icon="check" 
                            type="success" 
                            className="mr-1" 
                            hide={task.done}
                            onClick={() => props.changeState({task, done: true})}
                        />
                        
                        <IconButton 
                            icon="undo" 
                            type="warning" 
                            className="mr-1" 
                            hide={!task.done}
                            onClick={() => props.changeState({task, done: false})}
                        />

                        <IconButton 
                            icon="trash" 
                            type="danger" 
                            className="mr-1" 
                            hide={!task.done}
                            onClick={() => props.remove(task)}
                        />

                    </td>                
                </tr>
            ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="col-md-8">Descrição</th>
                        <th className="col-md-4">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

TodoList.displayName = 'TodoList';

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch => bindActionCreators({changeState, remove}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);