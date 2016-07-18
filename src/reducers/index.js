import { combineReducers } from 'redux';
import CounterReducer from './reducer_counter';

const rootReducer = combineReducers({
  counter: CounterReducer
});

export default rootReducer;
