/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import propTypes from 'prop-types';
import { state as initialState, fields as fieldSet } from './staticData';
import Form from '../../../abstract/Form';
import Footer from '../../../abstract/footer';
import contextHoc from '../../../abstract/HOC/contextHoc';
import Loading from '../../loading';

class ParticipantCourseDetails extends Component {
  state = initialState;

  goBack = () => {
    const { match: { params: { id } }, history } = this.props;
    history.push(`/participant/${id}/courses`);
  };

  onChange = (e) => {
    const { value, name } = e.target;
    if (name === 'course_name') return;
    this.setState({ [name]: value });
  };

  getCourseDetails = async () => {
    const { match: { params: { id, courseId } }, context: { dispatch } } = this.props;
    axios(`/api/v2/participant/${id}/course/details/${courseId}`)
      .then((result) => {
        const { data } = result;
        const start = data.course_start.split('T')[0];
        const end = data.course_end.split('T')[0];
        this.setState({
          ...data, course_end: end, course_start: start, loading: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'ERROR_PAGE',
          payload: { ErrorPage: error.response.status },
        });
      });
  };

  editIntervention= async (details) => {
    const confirm = await swal({
      type: 'warning',
      html: 'Are you sure for updating this details ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    if (confirm.value) {
      const { match: { params: { id, courseId } }, history } = this.props;
      const result = await axios(`/api/v2/participant/${id}/course/${courseId}`, {
        method: 'PUT',
        data: {
          trainingData: details,
        },
      });
      if (result.data.err) {
        await swal({
          title: '',
          type: 'warning',
          html: result.data.err,
          confirmButtonText: 'Ok',
        });
        history.push(`/participant/${id}/courses`);
      } else {
        await swal({
          title: 'Success',
          type: 'success',
          html: result.data.message,
        });
        this.setState({ ...details });
        history.push(`/participant/${id}/courses`);
      }
    }
  };

  componentDidMount = async () => {
    this.getCourseDetails();
  };

  // call edit function
  onSubmit = (e) => {
    e.preventDefault();
    const fields = { ...this.state };
    this.editIntervention(fields);
  };

  render() {
    const {
      loading,
    } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <Form
          title="Pastoral Intervention Details"
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

export default contextHoc(ParticipantCourseDetails);

ParticipantCourseDetails.propTypes = {
  match: propTypes.object,
  history: propTypes.object.isRequired,
};
