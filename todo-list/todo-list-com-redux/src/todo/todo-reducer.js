import { TODO_ACTIONS } from './todo-actions';

const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODO_ACTIONS.DESCRIPTION_CHANGED:
            return { ...state, description: action.payload }    
        case TODO_ACTIONS.TODO_SEARCHED:
            return { ...state, list: action.payload };
        case TODO_ACTIONS.TODO_CLEARED:
            return { ...state, description: ''};
        default:
            return state;
    }
}