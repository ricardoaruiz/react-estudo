import { combineReducers } from 'redux';
import field from './components/com-redux/field/fieldReducer'
import counter from './components/com-redux/counter/counterReducer';

export const reducers = combineReducers({
    field,
    counter
});