/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import propTypes from 'prop-types';
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

  cancleAction = () => {
    const { match: { params: { id } }, history } = this.props;
    history.push(`/participant/${id}/courses`);
  };

  getCoursesNames = async () => {
    const { history } = this.props;
    const data = await axios('/api/v2/courses/name');
    const final = data.data.coursesData;
    fieldSet[0][0].options = final.map(value => value.course_name);
    if (final[0]) {
      this.setState({ course_name: final[0].course_name });
    } else {
      await swal({
        type: 'warning',
        html: 'There is no trainings interventions, please add one',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok',
        confirmButtonAriaLabel: 'Thumbs up',
      });
      history.push('/courses/add');
    }
  };

  componentDidMount = () => {
    this.getCoursesNames();
  };

  addCourse = async (obj) => {
    const confirm = await swal({
      type: 'warning',
      html: 'Are you sure that you want to add this intervintions ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    if (confirm.value) {
      const { match: { params: { id } }, history } = this.props;
      const result = await axios(`/api/v2/participant/${id}/course`, {
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
      } else {
        await swal({
          title: 'Success',
          type: 'success',
          html: result.data.message,
        });
      }
      this.setState({ ...obj });
      history.push(`/participant/${id}/courses`);
    }
  };

  // add training course
  onSubmit = (event) => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });

    this.addCourse(fields);
    return null;
  };

  render() {
    return (
      <div>
        <Form
          title="Add New Training For Participant"
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

index.propTypes = {
  match: propTypes.object,
  history: propTypes.object.isRequired,
};
