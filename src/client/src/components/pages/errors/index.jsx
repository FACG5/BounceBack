import React from 'react';
import './style.css';
import propTypes from 'prop-types';

export default function index(props) {
  const { status } = props;
  return (
    <div className="error">
      <h1>
        {status}
        {' '}
      </h1>
      <p>Oops! Something is wrong.</p>
      <a className="button" href="/">
        <i className="icon-home" />
        <i className="fas fa-undo-alt" />
        Go back in initial page.
      </a>
    </div>
  );
}

index.propTypes = {
  status: propTypes.isRequired,
};
