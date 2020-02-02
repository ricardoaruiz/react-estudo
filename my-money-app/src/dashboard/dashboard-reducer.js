import { DASHBOARD_ACTIONS } from '../dashboard/dashboard-actions'

const INITIAL_STATE = {
    summary: {
        credit: 0,
        debit: 0
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DASHBOARD_ACTIONS.DASHBOARD_SUMMARY_LOADED:
            return { ...state, summary: action.payload }
        default:
            return state;
    }
}