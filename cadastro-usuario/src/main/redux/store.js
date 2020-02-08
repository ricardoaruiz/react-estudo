import { createStore, combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

const reducer = combineReducers({
    toastr,
})

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(reducer, devtools);
