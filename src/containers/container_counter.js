import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { square, squareRoot, reset } from '../actions/index';
import Counter from '../components/counter';

class CounterContainer extends Component {
  render() {

    const { square, squareRoot, reset, counter } = this.props;

    return(
      <Counter
        square={square}
        squareRoot={squareRoot}
        reset={reset}
        counter={counter}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ square, squareRoot, reset }, dispatch)
}

function mapStateToProps(state) {
  return { counter: state.counter };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
