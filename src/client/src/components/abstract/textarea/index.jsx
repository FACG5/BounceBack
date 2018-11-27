import React from 'react'
import propType from 'prop-types';
import './index.css';

export default function index(props) {
    const { name, height, width, value, label, onChange } = props;
    return (
        <>
            <label htmlFor={name} className="label-field">
                {label} :
            <textarea
                    name={name}
                    value={value}
                    className="textarea-input"
                    placeholder={`type  ${label}`}
                    style={{ height: height, width: width }}
                    onChange={onChange}
                />
            </label>
        </>
    )
}
index.propType = {
    name: propType.string.isRequired,
    height: propType.string.isRequired,
    width: propType.string.isRequired,
    value: propType.string.isRequired,
    label: propType.string.isRequired,
    onChange: propType.func.isRequired,
}
