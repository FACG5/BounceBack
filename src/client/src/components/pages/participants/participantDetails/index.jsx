import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from "../../../abstract/footer";
import axios from "axios";
import swal from "sweetalert2";
import contextHoc from './../../../abstract/HOC/contextHoc';

class index extends Component {
  state = initialState;

  goBack = event => {
    this.props.history.push("/participants/view");
  };

  goDates = event => {
    const id = this.props.match.params.id;
    this.props.history.push(`/participant/${id}/dates`);
  };

  goTrainings = event => {
    const id = this.props.match.params.id;
    this.props.history.push(`/participant/${id}/courses`);
  };

  getDetails = async () => {
    const id = this.props.match.params.id;
    const { dispatch } = this.props.context;
    axios(`/api/v2/participant/${id}`)
      .then(result => {
        const { data } = result;
        const date = data.date_of_birth.split("T")[0];
        this.setState({ ...data, date_of_birth: date });
      })
      .catch(error => {
        dispatch({
          type: "ERROR_PAGE",
          payload: { ErrorPage: error.response.status }
        });
      });
  };

  updateParticipant = async obj => {
    const confirm = await swal({
      type: "warning",
      html: "Are you sure that you want to update this data ?",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: "Thumbs up",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: "Thumbs down"
    });
    if (confirm.value) {
      const { id } = this.props.match.params;
      const result = await axios(`/api/v2/participant/${id}`, {
        method: "PUT",
        data: {
          participantData: obj
        }
      });
      if (result.data.error) {
        await swal({
          title: "",
          type: "warning",
          html: result.data.error,
          confirmButtonText: "Ok"
        });
        this.props.history.push("/participants/view");
      } else {
        await swal({
          title: "Success",
          type: "success",
          html: result.data.message
        });
        this.setState({ ...obj });
        this.props.history.push("/participants/view");
      }
    }
  };

  componentDidMount = () => {
    this.getDetails();
  };

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    this.updateParticipant(fields);
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Form
          title="Participant Details"
          fields={fieldSet}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.onSubmit, this.goBack, this.goDates, this.goTrainings]}
        />
        <Footer />
      </>
    );
  }
}

export default contextHoc(index);
