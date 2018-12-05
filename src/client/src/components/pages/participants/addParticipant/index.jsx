import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import {
  state as initialState,
  fields as fieldSet,
  validationForm,
} from './staticData';
import Form from '../../../abstract/Form';
import Footer from '../../../abstract/footer';
import './index.css';


export default class index extends Component {
  state = initialState


  onChange = (event) => {
    const { name, type } = event.target;
    const value = type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [name]: value });
  };

  clearFields = (event) => {
    event.preventDefault();
    const fields = this.state;
    Object.keys().forEach((key) => {
      fields[key] = '';
      return null;
    });
    this.setState(fields);
  };

  addParticipant = async (obj) => {
    const confirm = await swal({
      type: 'warning',
      html: 'Are you sure that you want to add this participant ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    if (confirm.value) {
      const result = await axios('/api/v2/participants', {
        method: 'POST',
        data: {
          participantdata: obj,
        },
      });
      if (result.data.error) {
        await swal({
          title: '',
          type: 'warning',
          html: result.data.error,
          confirmButtonText: 'Ok',
        });
      } else {
        await swal({
          title: 'Success',
          type: 'success',
          html: result.data.message,
        });
        this.setState({ ...obj });
        const { inPrison } = this.state;
        const { history } = this.props;
        if (!inPrison) {
          history.push('/participants/view');
        } else {
          const { id } = result.data;
          history.push(`/participants/${id}/prison`);
        }
      }
    }
  };

  // the implemention waiting  back end api
  onSubmit = (event) => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });
    this.addParticipant(fields);
    return null;
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
