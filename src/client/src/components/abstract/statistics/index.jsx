import React, { Component } from 'react';
import './style.css';

export default class Statistics extends Component {
  render() {
    const { number, value } = this.props;
    return (
        <div className='statistics'>
          <h2>{number}</h2>
          <h3>{value}</h3>
        </div>
    )
  }
}
