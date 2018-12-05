/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.css';

export default function container(props) {
  return (
    <div className="container">
      <div className="content-section">
        {props.children}
      </div>
    </div>
  );
}
