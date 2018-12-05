import React, { Component } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

import swal from 'sweetalert2';
import {
  state as initialState,
  fields as fieldSet,
  validationForm,
} from './staticData';
import Form from '../../../abstract/Form';
import Footer from '../../../abstract/footer';
import contextHoc from '../../../abstract/HOC/contextHoc';

class PresionDetails extends Component {
  state = initialState;

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goBack = () => {
    const { match: { params: { id } }, history } = this.props;
    history.push(`/participant/details/${id}`);
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


  addPrisonDetails = async (newPrisonDetails) => {
    const { match: { params: { id } }, history } = this.props;
    const confirm = await swal({
      type: 'warning',
      html: 'Are you sure for adding this prison details ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    if (confirm.value) {
      const result = await axios(`/api/v2/participants/${id}/prison`, {
        method: 'POST',
        data: {
          prisonDetails: newPrisonDetails,
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
        history.push('/participants/view');
      }
    }
  };

  // add new participant
  onSubmit = (event) => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });

    this.addPrisonDetails(fields);
    return null;
  };

  render() {
    return (
      <div>
        <Form
          title="Add Prison Details"
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

PresionDetails.propTypes = {
  match: propTypes.isRequired,
  history: propTypes.isRequired,
};
