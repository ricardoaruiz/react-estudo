import TodoService from "./TodoService";

export const TODO_ACTIONS ={
    DESCRIPTION_CHANGED: 'DESCRIPTION_CHANGED',
    TODO_SEARCHED: 'TODO_SEARCHED',
    TODO_CLEARED: 'TODO_CLEARED'
};

// Aqui não está usando nenhum middleware
export const changeDescription = event => ({
    type: TODO_ACTIONS.DESCRIPTION_CHANGED,
    payload: event.target.value
});

// Aqui está usando o middleware "thunk"
export const search = () => {
    return (dispatch, getState) => {
        // Pega a descrição do estado utilizando o getState() do redux-thunk
        const description = getState().todo.description;
        
        TodoService.search({ description })
            .then(response => dispatch({ type: TODO_ACTIONS.TODO_SEARCHED, payload: response.data }))
    };
};

// Aqui está usando o middleware "thunk"
export const add = description => {
    return dispatch => {
        TodoService.create({ description, done: false, date: new Date() })
            .then(() => dispatch(clear()))
            .then(() => dispatch(search()))
    };
}

// Aqui está usando o middleware "thunk"
export const remove = task => {
    return dispatch => {
        TodoService.delete(task)
            .then(() => dispatch(search()))
    }
}

// Aqui está usando o middleware "multi"
export const clear = () => {
    return [
        { type: TODO_ACTIONS.TODO_CLEARED },
        search()
    ];    
};

// Aqui está usando o middleware "thunk"
export const changeState = obj => {
    return dispatch => {
        TodoService.changeState({ ...obj.task, done: obj.done })
            .then(() => dispatch(search()));
    };
}