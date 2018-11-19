import React from "react";
import './style.css';

export default function index(props) {
  const { status } = props;
  return (
    <div className="error">
      <h1>{status}</h1>
      <p>Oops! Something is wrong.</p>
      <a className="button" href="/">
        <i className="icon-home" /> Go back in initial page, is better.
      </a>

    </div>
  );
}
