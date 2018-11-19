import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
  validationForm
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from "../../../abstract/footer";
import "./index.css";
import axios from "axios";
import swal from "sweetalert2";

export default class index extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  clearFields = event => {
    event.preventDefault();
    const fields = this.state;
    for (const key in fields) {
      fields[key] = "";
    }
    this.setState(fields);
  };

  addParticipant = obj => {
    swal({
      type: "warning",
      html: "Are you sure that you want to add this participant ?",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i className="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: "Thumbs up",
      cancelButtonText: '<i className="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: "Thumbs down"
    }).then(confirm => {
      if (confirm.value) {
        axios("/api/v2/participants", {
          method: "POST",
          data: {
            participantdata: obj
          }
        }).then(result => {
          if (result.data.error) {
            swal({
              title: "",
              type: "warning",
              html: result.data.error,
              confirmButtonText: "Ok"
            });
          } else {
            swal({
              title: "Success",
              type: "success",
              html: result.data.message
            }).then(confirm => {
              if (confirm.value) {
                this.setState({ ...obj });
                this.props.history.push("/participants/view");
              }
            });
          }
        });
      }
    });
  };

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });

    this.addParticipant(fields);
  };

  render() {
    return (
      <div className="add-participant">
        <Form
          title="Add Participant"
          fields={fieldSet}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.onSubmit, this.clearFields]}
        />
        <Footer />
      </div>
    );
  }
}
