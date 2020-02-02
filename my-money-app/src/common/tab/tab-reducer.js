import { TAB_ACTIONS } from './tab-actions';

const INITIAL_STATE = {
    selected: '',
    visible: {}
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case TAB_ACTIONS.TAB_SELECTED:
            return { ...state, selected: action.payload };    
        case TAB_ACTIONS.TAB_SHOWED:
            return { ...state, visible: action.payload }
        default:
            return state;
    }
}