import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';

export default class index extends Component {
  state = initialState;

  goBack = event => {
      
  };

  render() {
    return (
      <div>
        <Form
          title="Course Details"
          fields={fieldSet}
          values={this.state}
          btnEvents={[this.goBack]}
        />
        <Footer />
      </div>
    );
  }
}
