import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
  validationForm
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import axios from "axios";
import contextHoc from './../../../abstract/HOC/contextHoc';

class index extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  getDetails = async () => {
    const { dispatch } = this.props.context;
    const id = this.props.match.params.id;
    axios(`/api/v2/course/${id}`).then(result => {

      const { data } = result;
      const startDate = data.course_start.split("T")[0];
      const endDate = data.course_end.split("T")[0];
      this.setState({ ...data, course_start:startDate, course_end:endDate });
    }).catch(error => {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: error.response.status } })
    })

  };

  componentDidMount = () => {
    this.getDetails();
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
export default contextHoc(index);