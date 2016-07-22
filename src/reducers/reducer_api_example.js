import { MAKE_API_CALL } from '../actions/types';

const ApiExampleReducer = (state = [], action) => {
  switch (action.type) {
    case MAKE_API_CALL:
      return [action.payload.data.value, ...state];
    default:
      return state;
  }
}

export default ApiExampleReducer;
