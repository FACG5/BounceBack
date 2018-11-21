import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
  validationForm
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import axios from 'axios';

export default class index extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  cancleAction = event => {
    const { id } = this.props.match.params;
    this.props.history.push(`/participants/${id}/courses`);
  };

  getCoursesNames = async () => {
    const data = await axios("/api/v2/courses");
    console.log(data);
    const final = data.data.coursesData;
    let coursesName = fieldSet[0][0].options;
    final.map(value => {
      return coursesName.push(value.course_name);
    });

    this.setState({ coursesName: final[0].course_name });
  };

  componentWillMount = () => {
    this.getCoursesNames();
  }

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });

    for (const key in fields) {
      fields[key] = "";
    }
    this.setState(fields);
  };

  render() {
    return (
      <div>
        <Form
          title="Add New Intervention For Participant"
          fields={fieldSet}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.onSubmit, this.cancleAction]}
        />
        <Footer />
      </div>
    );
  }
}
