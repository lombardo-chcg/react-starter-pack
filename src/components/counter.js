import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { square, squareRoot, reset } from '../actions/index'


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
        <p>{this.props.counter}</p>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ square, squareRoot, reset }, dispatch)
}

function mapStateToProps(state) {
  return { counter: state };
}

export default Counter;
