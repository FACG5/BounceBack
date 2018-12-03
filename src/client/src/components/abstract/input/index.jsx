import React from 'react';
import propTypes from 'prop-types';
import './index.css';

export default function index(props) {
    let { value, onChange, type, label, name, width, placeholder, ...rest } = props;
    return (
        <>
            <label htmlFor={name} className="label-field">
                {label} :
            <input
                    name={name}
                    type={type}
                    style={{ width: width }}
                    placeholder={`type ${placeholder} ...`}
                    className="input-field"
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
            </label>
        </>
    )
}
index.propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    type: propTypes.string,
    width: propTypes.string,
}

