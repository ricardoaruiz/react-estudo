import { COUNTER_ACTIONS } from './counterActions';

const INITIAL_STATE = { 
    step: 1,
    value: 0 
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case COUNTER_ACTIONS.COUNTER_INCREMENT:
            return { ...state, value: state.value + state.step }
        case COUNTER_ACTIONS.COUNTER_DECREMENT:
            return { ...state, value: state.value - state.step }
        case COUNTER_ACTIONS.STEP_CHANGED:
            return { ...state, step: parseInt(action.payload) }    
        default:
            return state;
    }

}