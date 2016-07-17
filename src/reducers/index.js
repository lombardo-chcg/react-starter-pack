import { createStore } from 'redux';

const squared = (state = 2, action) => {
  switch (action.type) {
    case 'SQUARE':
      return state * state;
    case 'SQUARE_ROOT':
      return Math.sqrt(state);
    case 'RESET':
      return 2;
    default:
      return state;
  }
}

const Store = createStore(squared)

export default Store;
