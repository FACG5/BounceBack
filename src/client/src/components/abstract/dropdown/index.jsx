import React, { Component } from 'react';
import propType from 'prop-types';
import './style.css'

export default class Dropdown extends Component {
  render() {
      const { name, label, options, width } = this.props;
    return (
      <React.Fragment>
          <label htmlFor={name} className='label-field'>{label}
            <select name={name} className='drop-field' style={ { width: width } }>
                
                { options ?( options.map((option,index) => (
                <option value={option} key={index}>{option}</option>
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
  width : propType.string.isRequired
}