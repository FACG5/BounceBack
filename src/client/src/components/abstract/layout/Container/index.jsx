/* eslint-disable react/forbid-prop-types */
import React from 'react';
import './style.css';
import propTypes from 'prop-types';

export default function container(props) {
  const { children } = props;
  return (
    <div className="container">
      <div className="content-section">
        {children}
      </div>
    </div>
  );
}

container.propTypes = {
  children: propTypes.any.isRequired,
};
