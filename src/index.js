import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render () {
    return <div className="chip">Welcome to the React Starter Pack</div>;
  }
}

render(<App/>, document.getElementById('app'));
