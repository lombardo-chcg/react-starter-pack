import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ApiExample extends Component {
  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
    this.renderApiData = this.renderApiData.bind(this);
  }

  buttonClick() {
    this.props.makeApiCall()
  }

  renderApiData() {
    let dataCollection = []
    this.props.apiData.map( (pieceOfData) => {
      dataCollection.push(
        <li key={pieceOfData.id} className="collection-item">
          {pieceOfData.joke}
        </li>
      )
    })
    return dataCollection;
  }

  render() {
    const buttonClass = "blue accent-1 waves-effect waves-light btn counter-buttons";
    return (
      <div>
        <h5 className='center-align'>Make a Sample API Call</h5>
        <button className={buttonClass} onClick={this.buttonClick}>get api data</button>
        <ul className="collection">
          {this.renderApiData()}
        </ul>
      </div>
    );
  }
}
