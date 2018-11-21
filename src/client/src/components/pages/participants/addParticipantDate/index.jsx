import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
  validationForm
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from "../../../abstract/footer";
import axios from "axios";
import swal from "sweetalert2";

export default class index extends Component {
  state = initialState;

  onChange = async event => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
  };

  cancleAction = event => {
    const { id } = this.props.match.params;
    this.props.history.push(`/participant/${id}/dates`);
  };

  getWorkersNames = async () => {
    const data = await axios("/api/v2/workers");
    const final = data.data.workersData;

    let workersName = fieldSet[0][0].options;
    final.map(value => {
      return workersName.push(value.username);
    });

    this.setState({ worker_name: final[0].username });
  };

  addDate = async obj => {
    const confirm = await swal({
      type: "warning",
      html: "Are you sure that you want to add this date ?",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: "Thumbs up",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: "Thumbs down"
    });
    if (confirm.value) {
      const { id } = this.props.match.params;
      const { worker_name, date, note } = obj;
      const result = await axios(`/api/v2/participant/${id}/date`, {
        method: "POST",
        data: {
          dateData: obj,
        }
      });
      if (result.data.error) {
        await swal({
          title: "",
          type: "warning",
          html: result.data.error,
          confirmButtonText: "Ok"
        });
      } else {
        await swal({
          title: "Success",
          type: "success",
          html: result.data.message
        });
        this.setState({ ...obj });
        this.props.history.push(`/participant/${id}/dates`);
      }
    }
  };

  componentWillMount = () => {
    this.getWorkersNames();
  };

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });
    this.addDate(fields);
  };

  render() {
    return (
      <div>
        <Form
          title="Add Date"
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
