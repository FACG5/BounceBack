import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
  validationForm
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import axios from "axios";

export default class index extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  getData = async () => {
    const id = this.props.match.params.id;
    const data = await axios(`/api/v2/course/${id}`);
    const details = data.data.details;
    const startDate = details.course_start.split("T")[0];
    const endDate = details.course_end.split("T")[0];
    this.setState({...details, course_start:startDate, course_end:endDate});
  };

  componentDidMount = () => {
    this.getData();
  }

  goBack = event => {
    this.props.history.push('/courses/view')
  };

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });

    this.setState(fields);
  };

  render() {
    return (
      <div>
        <Form
          title="Course Details"
          fields={fieldSet}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.onSubmit, this.goBack]}
        />
        <Footer />
      </div>
    );
  }
}
