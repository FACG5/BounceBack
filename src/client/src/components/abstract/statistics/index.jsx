/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import propType from 'prop-types';
import './style.css';

export default class Statistics extends Component {
  render() {
    const { number, value } = this.props;
    return (
      <div className="statistics">
        <h2>{number}</h2>
        <h3>{value}</h3>
      </div>
    );
  }
}

Statistics.propType = {
  number: propType.isRequired,
  value: propType.isRequired,
};
