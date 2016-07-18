import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app';
import LandingPage from './components/landing_page'
import CounterContainer from './containers/container_counter';

import rootReducer from './reducers/index';
const Store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>

      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path='/counter' component={CounterContainer} />
        <Route path="/:pathNotFound" component={LandingPage} />
      </Route>

    </Router>
  </Provider>
  , document.getElementById('app'));
