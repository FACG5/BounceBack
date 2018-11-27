import React from "react";
import "./index.css";
export default function index(props) {
  const { value, color, onClick } = props;
  return (
    <>
      <button className="button" style={{ background: color }} onClick={onClick}>
        {value}
      </button>
    </>
  );
}
