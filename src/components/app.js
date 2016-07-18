import React from 'react';

import NavBar from './navbar'

class App extends React.Component {
  render () {
    return (
      <div>
        <h4 className='center-align'>Welcome to the React Starter Pack</h4>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

export default App;
