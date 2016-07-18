import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.squareClick = this.squareClick.bind(this);
    this.squareRootClick = this.squareRootClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

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
    const buttonClass = "blue accent-1 waves-effect waves-light btn counter-buttons";
    return (
      <div>
        <h3 className='center-align'>{this.props.counter}</h3>
        <button className={buttonClass} onClick={this.squareClick}>square</button>
        <button className={buttonClass} onClick={this.squareRootClick}>square root</button>
        <button className={buttonClass} onClick={this.resetClick}>reset</button>
      </div>
    );
  }
}
