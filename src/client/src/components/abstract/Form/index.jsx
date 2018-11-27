import React from "react";
import { Link } from 'react-router-dom';
import propTypes from "prop-types";
import Container from "./../layout/Container/";
import Header from "./../header";
import Input from "./../input";
import Button from "./../button";
import DropDown from "./../dropdown";
import Textarea from "./../textarea";
import Sidebar from "./../sidebar";
import "./index.css";

export default function index(props) {
  const { fields, values, onChange, btnEvents, title } = props;
  return (
    <Container>
      <Sidebar />
      <Header value={title} />
      <div className="add-participant-fields">
        {fields.map((row, index) => (
          <div className="add-participant-row" key={index}>
            {row.map((field, index) => {
              const { tag, staticField, path } = field;
              if (tag === "Input") {
                return (
                  <Input
                    key={index}
                    {...field}
                    value={values[field.name].toString()}
                    onChange={onChange}
                  />
                );
              } else if (tag === "DropDown") {
                return (
                  <DropDown
                    key={index}
                    {...field}
                    value={values[field.name]}
                    onChange={onChange}
                  />
                );
              } else if (tag === "Button" && staticField === true) {
                return (
                  <Button {...field} key={index} onClick={btnEvents[index]} />
                );
              } else if (tag === "Button") {
                return (
                  <Link to={path} key={index}>
                    <Button {...field} />
                  </Link>
                );
              } else if (tag === "Textarea") {
                return <Textarea {...field} value={values[field.name]} key={index} onChange={onChange} />;
              }
              return null;
            })}
          </div>
        ))}
        <span className="form-error">{values.error}</span>
      </div>
    </Container>
  );
}

index.propTypes = {
  fields: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
  values: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
  btnEvents: propTypes.array
};
