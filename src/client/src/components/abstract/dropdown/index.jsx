/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import propType from 'prop-types';
import './style.css';
import uuid from 'uuid';

export default class Dropdown extends Component {
  render() {
    const {
      name, label, options, width, value, onChange,
    } = this.props;
    return (
      <>
        <label htmlFor={name} className="label-field">
          {label}
          <select name={name} className="drop-field" style={{ width }} value={value} onChange={onChange}>
            {
              options ? (options.map(option => (
                <option value={option} key={uuid()}>{option}</option>
              ))) : ''
            }
          </select>
        </label>
      </>
    );
  }
}

Dropdown.propType = {
  name: propType.string.isRequired,
  label: propType.string.isRequired,
  options: propType.array.isRequired,
  width: propType.string.isRequired,
};
