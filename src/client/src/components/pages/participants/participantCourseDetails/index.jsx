import React, { Component } from "react";
import { state as initialState, fields as fieldSet } from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from "../../../abstract/footer";
import axios from 'axios';
import contextHoc from './../../../abstract/HOC/contextHoc';
import Loading from '../../loading';
import swal from "sweetalert2";

class ParticipantCourseDetails extends Component {
  state = initialState;

  goBack = event => {
    const { id } = this.props.match.params;
    this.props.history.push(`/participant/${id}/courses`);
  };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  getCourseDetails = async () => {
    const { id, course_id } = this.props.match.params;
    const { dispatch } = this.props.context;
    axios(`/api/v2/participant/${id}/course/details/${course_id}`)
      .then(result => {
        const { data } = result;
        const start = data.course_start.split("T")[0];
        const end = data.course_end.split("T")[0];
        this.setState({ ...data, course_end: end, course_start: start, loading: false });
      })
      .catch(error => {
        dispatch({
          type: "ERROR_PAGE",
          payload: { ErrorPage: error.response.status }
        });
      });
  };

  editIntervention= async details => {
    const confirm = await swal({
      type: "warning",
      html: "Are you sure for updating this details ?",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: "Thumbs up",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: "Thumbs down"
    });
    if (confirm.value) {
      const { id, course_id } = this.props.match.params;
      const result = await axios(`/api/v2/participant/${id}/course/${course_id}`, {
        method: "PUT",
        data: {
          trainingData: details
        }
      });
      if (result.data.err) {
        await swal({
          title: "",
          type: "warning",
          html: result.data.err,
          confirmButtonText: "Ok"
        });
        this.props.history.push(`/participant/${id}/courses`);
      } else {
        await swal({
          title: "Success",
          type: "success",
          html: result.data.msg
        });
        this.setState({ ...details });
        this.props.history.push(`/participant/${id}/courses`);
      }
    }
  };

  componentDidMount = async () => {
    this.getCourseDetails();
  };
  
  // call edit function
  onSubmit = e => {
    e.preventDefault();
    const fields = { ...this.state };
    this.editIntervention(fields);
  };

  render() {
    const {
      loading
    } = this.state;
    if (loading) return <Loading />;
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
