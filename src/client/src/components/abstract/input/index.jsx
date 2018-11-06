import React from 'react';
import propTypes from 'prop-types';
import './index.css';

export default function index(props) {
  const { value, onChange, type, label, name, width } = props;
  return (
    <div>
        <label htmlFor={name} className="label-field">
            {label} :
            <input 
                name={ name }
                type={ type } 
                style={ { width: width } }
                placeholder = {`type ${label} ...`}
                className="input-field"
                value={ value }
                onChange={onChange}
            />
        </label>
    </div>
  )
}
index.propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string,
    type: propTypes.string,
    width: propTypes.string,
}

