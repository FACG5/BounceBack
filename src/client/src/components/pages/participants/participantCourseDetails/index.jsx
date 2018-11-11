import React, { Component } from "react";
import { state as initialState, fields as fieldSet } from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from "../../../abstract/footer";

export default class index extends Component {
  state = initialState;

  goBack = event => {
    this.props.history.push("/participants/courses");
  };

  // Fake Function because onChange is required in Form
  onChange = () => {
    return null;
  }
  
  render() {
    return (
      <div>
        <Form
          title="Course Details"
          fields={fieldSet}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.goBack]}
        />
        <Footer />
      </div>
    );
  }
}
