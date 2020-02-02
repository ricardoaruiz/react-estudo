import { BILLING_CYCLES_ACTIONS } from './billing-cycles-actions';

const INITIAL_STATE = {
    list: [],
    initForm: { name: 'Teste', month: 12, year: 2020}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BILLING_CYCLES_ACTIONS.BILLING_CYCLES_FETCHED:
            return { ...state, list: action.payload.data };    
        default:
            return state;
    }
}