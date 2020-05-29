import { ACTION_TYPES } from '../actions/numbers';

const INITIAL_STATE = {
  min: 0,
  max: 10,
};

// Numbers Reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.MIN_CHANGED:
      return { ...state, min: action.payload };
    case ACTION_TYPES.MAX_CHANGED:
      return { ...state, max: action.payload };
    default:
      return state;
  }
};
