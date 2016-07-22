import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { makeApiCall } from '../actions/index';
import ApiExample from '../components/api_example';

class ApiExampleContainer extends Component {
  render() {
    return(
      <ApiExample
        apiData={this.props.apiData}
        makeApiCall={this.props.makeApiCall}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeApiCall }, dispatch)
}

function mapStateToProps(state) {
  return { apiData: state.apiData };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiExampleContainer)
