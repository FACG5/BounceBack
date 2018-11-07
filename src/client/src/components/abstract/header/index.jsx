import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
  render() {
    const { value, align, margin } = this.props;
    return (
      <div className='header' style={ { textAlign:align, marginBottom:margin } }>
        <h1>{value}</h1>
      </div>
    )
  }
}
