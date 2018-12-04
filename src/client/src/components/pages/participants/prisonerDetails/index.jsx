import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
} from './staticData';
import Form from './../../../abstract/Form';
import Footer from '../../../abstract/footer';
import axios from "axios";
import swal from "sweetalert2";
import contextHoc from './../../../abstract/HOC/contextHoc';

class PresionerDetails extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  goBack = event => {
    const { id } = this.props.match.params;
    this.props.history.push(`/participant/details/${id}`)
  };

  getPrisonerDetails = async () => {
    const id = this.props.match.params.id;
    const { dispatch } = this.props.context;  
    axios(`/api/v2/participants/${id}/prison`)
      .then( async result => {
        const data = result.data.getPrisoner.rows[0];
        const date = data.prison_release.split("T")[0];
        this.setState({ ...data, prison_release: date, loading: false })
      })
      .catch(error => {
        dispatch({
          type: "ERROR_PAGE",
          payload: { ErrorPage: error.response.status }
        });
      })
  };
  componentDidMount = () => {
    this.getPrisonerDetails();
  };

  updatePrisoner = async data => {
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
      const prisonId = this.props.match.params.prisonerId;
      const result = await axios(`/api/v2/prison/${prisonId}`, {
        method: "PUT",
        data: {
           prisonerData: data
        }
      });
      if (result.data.error) {
        await swal({
          title: "",
          type: "warning",
          html: result.data.error,
          confirmButtonText: "Ok"
        });
        this.props.history.push(`/participant/details/${id}`);
      } else {
        await swal({
          title: "Success",
          type: "success",
          html: result.data.message
        });
        this.setState({ ...data });
        this.props.history.push(`/participant/details/${id}`);
      }
    }
  };

  // Edit Data
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    this.updatePrisoner(fields);
  };

  render() {
    return (
      <div>
        <Form
          title="Prisoner Details"
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

export default contextHoc(PresionerDetails);
