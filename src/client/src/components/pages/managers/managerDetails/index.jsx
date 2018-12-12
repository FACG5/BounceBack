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
import contextHoc from '../../../abstract/HOC/contextHoc';
import Loading from '../../loading';

class index extends Component {
  state = initialState;

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goBack = () => {
    const { history } = this.props;
    history.push('/managers/view');
  };

  getData = async () => {
    const { match: { params: { id } }, context: { dispatch } } = this.props;
    axios(`/api/v2/manager/${id}`).then((result) => {
      const { data } = result;
      const date = data.date_of_birth.split('T')[0];
      this.setState({ ...data, date_of_birth: date, loading: false });
    }).catch((error) => {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: error.response.status } });
    });
  };

updateManager = async (obj) => {
  const confirm = await swal({
    type: 'warning',
    html: 'Are you sure that you want to update this data ?',
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
    confirmButtonAriaLabel: 'Thumbs up',
    cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
    cancelButtonAriaLabel: 'Thumbs down',
  });
  if (confirm.value) {
    const { match: { params: { id } }, history } = this.props;
    const result = await axios(`/api/v2/manager/${id}`, {
      method: 'PUT',
      data: {
        managerData: obj,
      },
    });
    if (result.data.error) {
      await swal({
        title: '',
        type: 'warning',
        html: result.data.error,
        confirmButtonText: 'Ok',
      });
      history.push('/managers/view');
    } else {
      await swal({
        title: 'Success',
        type: 'success',
        html: result.data.message,
      });
      this.setState({ ...obj });
      history.push('/managers/view');
    }
  }
};

  componentDidMount = () => {
    this.getData();
  }

  // the implemention waiting  back end api
  onSubmit = (event) => {
    event.preventDefault();
    const fields = { ...this.state };
    const { password, confirmPassword } = fields;
    if (password !== confirmPassword) { this.setState({ error: 'The two passwords do not pass' }); } else {
      const error = validationForm(fields);
      if (error) return this.setState({ error });
      this.updateManager(fields);
    }
  };

  render() {
    const {
      loading,
    } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <Form
          title="Manager Details"
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

index.propTypes = {
  history: propTypes.object.isRequired,
};
