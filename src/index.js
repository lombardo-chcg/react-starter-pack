import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app';
import LandingPage from './components/landing_page';
import PageNotFound from './components/page_not_found';
import CounterContainer from './containers/container_counter';
import ApiExampleContainer from './containers/container_api_example';

import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const Store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>

      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path='/counter' component={CounterContainer} />
      <Route path='/api_example' component={ApiExampleContainer} />
        <Route path="/:pathNotFound" component={PageNotFound} />
      </Route>

    </Router>
  </Provider>
  , document.getElementById('app'));
