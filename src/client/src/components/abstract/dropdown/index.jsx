import React, { Component } from 'react';
import './style.css'

export default class Dropdown extends Component {
  render() {
      const { name, label, options, width } = this.props;
    return (
      <React.Fragment>
          <label htmlFor={name} className='label-field'>{label}
            <select name={name} className='drop-field' style={ { width: width } }>
                {options.map((option,index) => (
                <option value={option} key={index}>{option}</option>
                ))}
            </select>
          </label>
      </React.Fragment>
    )
  }
}
