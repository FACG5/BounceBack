import React, { Component } from "react";
import { state as initialState, fields as fieldSet } from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import axios from 'axios';
import contextHoc from './../../../abstract/HOC/contextHoc';
import Loading from '../../loading';
import swal from "sweetalert2";

class index extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goBack = event => {
    const id = this.props.match.params.id;
    this.props.history.push(`/participant/${id}/dates`);
  };

  getDetails = async () => {
    const { id, date_id } = this.props.match.params;
    const { dispatch } = this.props.context;
    axios(`/api/v2/participant/${id}/date/details/${date_id}`)
      .then(result => {
        const { data } = result;
        const currentDate = data.date.split("T")[0];
        this.setState({ ...data, date: currentDate, loading: false });
      })
      .catch(error => {
        dispatch({
          type: "ERROR_PAGE",
          payload: { ErrorPage: error.response.status }
        });
      });
  };

  editDate= async details => {
    const confirm = await swal({
      type: "warning",
      html: "Are you sure for updating this date ?",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: "Thumbs up",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: "Thumbs down"
    });
    if (confirm.value) {
      const { id, date_id } = this.props.match.params;
      const result = await axios(`/api/v2/participant/${id}/date/${date_id}`, {
        method: "PUT",
        data: {
          dateData: details
        }
      });
      if (result.data.err) {
        await swal({
          title: "",
          type: "warning",
          html: result.data.err,
          confirmButtonText: "Ok"
        });
        this.props.history.push(`/participant/${id}/dates`);
      } else {
        await swal({
          title: "Success",
          type: "success",
          html: result.data.message
        });
        this.setState({ ...details });
        this.props.history.push(`/participant/${id}/dates`);
      }
    }
  };

  componentDidMount = async () => {
    this.getDetails();
  };

  // call edit function
  onSubmit = e => {
    e.preventDefault();
    const fields = { ...this.state };
    this.editDate(fields);
  };

  render() {
    const {
      loading
    } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <Form
          title="Date Details and Notes"
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
