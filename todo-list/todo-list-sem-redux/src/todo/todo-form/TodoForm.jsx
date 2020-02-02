import './TodoForm.scss';

import React from 'react';

import Grid from '../../template/grid/Grid';
import IconButton from '../../template/icon-button/IconButton';

const TodoForm = props => {

    const handleDescriptionChange = event => {       
        props.onDescriptionInput(event.target.value)
    };

    const handleKeyUp = event => {
        
        switch (event.key) {
            case 'Enter':
                event.ctrlKey ? props.onAdd() : props.onSearch()    
                break;
            case 'Escape':
                props.onClear();
                break;
            default:
                break;
        }
    }

    return (
        <div className="row">
            <Grid cols="12 9 10">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Informe a tarefa"
                    value={props.description}
                    onChange={handleDescriptionChange}
                    onKeyUp={handleKeyUp}
                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton 
                    icon="plus" 
                    type="primary" 
                    className="mr-1" 
                    onClick={props.onAdd}
                    disabled={!props.description}
                />

                <IconButton 
                    icon="search" 
                    type="secondary" 
                    className="mr-1" 
                    onClick={props.onSearch}
                />

                <IconButton 
                    icon="times" 
                    type="dark" 
                    onClick={props.onClear}
                />
            </Grid>
        </div>
    )
}

TodoForm.displayName = 'TodoForm';

export default TodoForm;