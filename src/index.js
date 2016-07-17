import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import CounterContainer from './containers/container_counter'
import Store from './reducers/index'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="chip">Welcome to the React Starter Pack</div>
        <CounterContainer />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={Store}>
    <App/>
  </Provider>
  , document.getElementById('app'));
