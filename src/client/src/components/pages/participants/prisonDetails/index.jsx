import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
  validationForm
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import axios from "axios";
import swal from "sweetalert2";
import contextHoc from './../../../abstract/HOC/contextHoc';

class PresionDetails extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  goBack = event => {
    this.props.history.push('/participants/add')
  };
  clearFields = event => {
    event.preventDefault();
    const fields = this.state;
    for (const key in fields) {
      fields[key] = "";
    }
    this.setState(fields);
  };



  addPrisonDetails = async newPrisonDetails => {
    const { id } = this.props.match.params;
    const confirm = await swal({
      type: "warning",
      html: "Are you sure for adding this prison details ?",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: "Thumbs up",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: "Thumbs down"
    });
    if (confirm.value) {
      const result = await axios(`/api/v2/participants/${id}/prison`, {
        method: "POST",
        data: {
          prisonDetails: newPrisonDetails,
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
        this.setState({ ...newPrisonDetails });
        this.props.history.push("/participants/view");
      }
    }
  };

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });

    this.addPrisonDetails(fields);
  };

  render() {
    return (
      <div>
        <Form
          title="Prison Details"
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

export default contextHoc(PresionDetails);
