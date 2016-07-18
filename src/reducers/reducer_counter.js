import {
  SQUARE,
  SQUARE_ROOT,
  RESET,
} from '../actions/types';

const CounterReducer = (state = 2, action) => {
  switch (action.type) {
    case SQUARE:
      return state * state;
    case SQUARE_ROOT:
      return Math.sqrt(state);
    case RESET:
      return 2;
    default:
      return state;
  }
}

export default CounterReducer;
