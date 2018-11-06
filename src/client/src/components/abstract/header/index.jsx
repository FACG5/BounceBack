import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className='header'>
        <h1>{value}</h1>
      </div>
    )
  }
}
