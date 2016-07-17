import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { square, squareRoot, reset } from '../actions/index';

import Counter from '../components/counter';

class CounterContainer extends React.Component {
  render() {

    const props = this.props;

    return(
      <Counter
        square={props.square}
        squareRoot={props.squareRoot}
        reset={props.reset}
        counter={props.counter}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ square, squareRoot, reset }, dispatch)
}

function mapStateToProps(state) {
  return { counter: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
