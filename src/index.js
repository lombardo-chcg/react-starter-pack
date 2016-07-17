import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import rootReducer from './reducers/index';

const Store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={Store}>
    <App/>
  </Provider>
  , document.getElementById('app'));
