import React from 'react';

import CounterContainer from '../containers/container_counter';

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

export default App;
