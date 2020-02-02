import './TodoForm.scss';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../../template/grid/Grid';
import IconButton from '../../template/icon-button/IconButton';
import { changeDescription, search, add, clear } from '../todo-actions';

class TodoForm extends React.Component {

    componentDidMount() {
        this.props.search();
    }

    handleKeyUp = event => {
        
        const { add, search, clear, description } = this.props;

        switch (event.key) {
            case 'Enter':
                event.ctrlKey 
                    ? add(description) 
                    : search()    
                break;
            case 'Escape':
                clear();
                break;
            default:
                break;
        }
    }

    render() {

        const { add, search, clear, description } = this.props;

        return (
            <div className="row">
                <Grid cols="12 9 10">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Informe a tarefa"
                        value={description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.handleKeyUp}
                    />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton 
                        icon="plus" 
                        type="primary" 
                        className="mr-1" 
                        onClick={() => add(description)}
                        disabled={!description}
                    />

                    <IconButton 
                        icon="search" 
                        type="secondary" 
                        className="mr-1" 
                        onClick={() => search()}
                    />

                    <IconButton 
                        icon="times" 
                        type="dark" 
                        onClick={clear}
                    />
                </Grid>
            </div>
        )
    }
}

TodoForm.displayName = 'TodoForm';

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clear} ,dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);