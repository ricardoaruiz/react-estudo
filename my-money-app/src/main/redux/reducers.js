import { combineReducers } from 'redux';
import { reducer as toatrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';

import BillingCyclesReducer from '../../billing-cycles/billing-cycles.reducer';
import TabReducer from '../../common/tab/tab-reducer';
import DashboardReducer from '../../dashboard/dashboard-reducer';

export default combineReducers({
    dashboard: DashboardReducer,
    billingCycles: BillingCyclesReducer,
    tab: TabReducer,

    form: formReducer,
    toastr: toatrReducer
});