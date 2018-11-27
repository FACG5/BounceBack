import React, { Component } from 'react';
import propType from 'prop-types';
import './style.css'
import uuid from 'uuid';
export default class Dropdown extends Component {
  render() {
    const { name, label, options, width, value, onChange } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={name} className='label-field'>{label}
          <select name={name} className='drop-field' style={{ width: width }} value={value} onChange={onChange}>
            {
              options ? (options.map(option => (
                <option value={option} key={uuid()}>{option}</option>
              ))) : ""
            }
          </select>
        </label>
      </React.Fragment>
    )
  }
}

Dropdown.propType = {
  name: propType.string.isRequired,
  label: propType.string.isRequired,
  options: propType.array.isRequired,
  width: propType.string.isRequired
}
