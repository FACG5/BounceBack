import React from 'react';
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
