import React, { Component } from 'react';
import NavBar from './navbar';

export default class App extends Component {
  render () {
    return (
      <div>
        <h4 className='center-align'>Welcome to the React Starter Pack</h4>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
