import React, { Component } from 'react';
import swal from 'sweetalert2';
import axios from 'axios';

import {
  state as initialState,
  fields as fieldSet,
  validationForm,
} from './staticData';
import Form from '../../../abstract/Form';
import Footer from '../../../abstract/footer';

export default class index extends Component {
  state = initialState;

  onChange = (event) => {
    const { value, name } = event.target;
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

  addCourse = async (obj) => {
    const confirm = await swal({
      type: 'warning',
      html: 'Are you sure that you want to add this intervention ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    });

    if (confirm.value) {
      const { history } = this.props;
      const result = await axios('/api/v2/courses', {
        method: 'POST',
        data: {
          courseData: obj,
        },
      });
      if (result.data.error) {
        await swal({
          title: '',
          type: 'warning',
          html: result.data.error,
          confirmButtonText: 'Ok',
        });
        history.push('/courses/view');
      } else {
        await swal({
          title: 'Success',
          type: 'success',
          html: result.data.message,
        });
        this.setState({ ...obj });
        history.push('/courses/view');
      }
    }
  };

  // the implemention waiting  back end api
  onSubmit = (event) => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });
    this.addCourse(fields);
    return null;
  };

  render() {
    const { type } = this.state;
    const fieldsSetClone = [...fieldSet];
    if (type === 'pastoral') {
      fieldsSetClone.splice(1, 1);
    } else if (type === 'trainings') {
      fieldsSetClone.splice(2, 1);
    }
    return (
      <div>
        <Form
          title="Add Intervention"
          fields={fieldsSetClone}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.onSubmit, this.clearFields]}
        />
        <Footer />
      </div>
    );
  }
}
