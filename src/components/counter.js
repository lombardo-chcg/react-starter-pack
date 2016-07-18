import React from 'react';
import { Link } from 'react-router';

class Counter extends React.Component {
  squareClick() {
    this.props.square()
  }

  squareRootClick() {
    this.props.squareRoot()
  }

  resetClick() {
    this.props.reset()
  }

  render() {
    return(
      <div>
        <Link to='/'>Landing Page (this link is a redux router example)</Link>
        <p>=> {this.props.counter}</p>
        <button className={buttonClass()} onClick={this.squareClick.bind(this)}>square</button>
        <button className={buttonClass()} onClick={this.squareRootClick.bind(this)}>square root</button>
        <button className={buttonClass()} onClick={this.resetClick.bind(this)}>reset</button>
      </div>
    )
  }
}

function buttonClass() {
  return "blue accent-1 waves-effect waves-light btn"
}

export default Counter;
