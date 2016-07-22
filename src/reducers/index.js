import { combineReducers } from 'redux';
import CounterReducer from './reducer_counter';
import ApiExampleReducer from './reducer_api_example';

const rootReducer = combineReducers({
  counter: CounterReducer,
  apiData: ApiExampleReducer
});

export default rootReducer;
