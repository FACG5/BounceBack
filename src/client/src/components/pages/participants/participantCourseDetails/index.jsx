import React, { Component } from "react";
import { state as initialState, fields as fieldSet } from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from "../../../abstract/footer";
import axios from 'axios';
import contextHoc from './../../../abstract/HOC/contextHoc';

class ParticipantCourseDetails extends Component {
  state = initialState;

  goBack = event => {
    const { id } = this.props.match.params;
    this.props.history.push(`/participants/${id}/courses`);
  };

  // Fake Function because onChange is required in Form
  onChange = () => {
    return null;
  }
  onSubmit = () => {
    return null;
  }

  getCourseDetails = async () => {
    const { id, course_id } = this.props.match.params;
    const { dispatch } = this.props.context;
    axios(`/api/v2/participant/${id}/course/details/${course_id}`)
      .then(result => {
        const { data } = result;
        const start = data.course_start.split("T")[0];
        const end = data.course_end.split("T")[0];
        this.setState({ ...data, course_end: end, course_start: start });
      })
      .catch(error => {
        dispatch({
          type: "ERROR_PAGE",
          payload: { ErrorPage: error.response.status }
        });
      });
  };

  componentWillMount = async () => {
    this.getCourseDetails();
  };
  
  render() {
    return (
      <div>
        <Form
          title="Intervention Details"
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

export default contextHoc(ParticipantCourseDetails);
