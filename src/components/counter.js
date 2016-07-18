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
        <h3 className='center-align'> {this.props.counter} </h3>
        <button className={buttonClass()} onClick={this.squareClick.bind(this)}>square</button>
        <button className={buttonClass()} onClick={this.squareRootClick.bind(this)}>square root</button>
        <button className={buttonClass()} onClick={this.resetClick.bind(this)}>reset</button>
      </div>
    )
  }
}

function buttonClass() {
  return "blue accent-1 waves-effect waves-light btn counter-buttons"
}

export default Counter;
