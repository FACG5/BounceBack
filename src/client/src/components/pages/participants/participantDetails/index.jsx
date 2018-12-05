import React, { Component } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import swal from 'sweetalert2';
import {
  state as initialState,
  fields as fieldSet,
} from './staticData';
import Form from '../../../abstract/Form';
import Footer from '../../../abstract/footer';
import contextHoc from '../../../abstract/HOC/contextHoc';
import Loading from '../../loading';

class index extends Component {
  state = initialState;

  goBack = () => {
    const { history } = this.props;
    history.push('/participants/view');
  };

  goDates = () => {
    const { match: { params: { id } }, history } = this.props;
    history.push(`/participant/${id}/dates`);
  };

  goTrainings = () => {
    const { match: { params: { id } }, history } = this.props;
    history.push(`/participant/${id}/courses`);
  };

  goPrison = () => {
    const { match: { params: { id, prisonId } }, history } = this.props;
    history.push(`/participants/${id}/prisoner/${prisonId}`);
  }

  getPrison = async () => {
    const { match: { params: { id } }, context: { dispatch } } = this.props;
    axios(`/api/v2/participants/${id}/prison`)
      .then((result) => {
        const { count } = result.data.getPrisoner;
        if (count === 1) {
          fieldSet[0][2].display = 'block';
          const prisonId = result.data.getPrisoner.rows[0].id;
          this.setState({ fieldSet, prisonerId: prisonId });
        } else {
          fieldSet[0][2].display = 'none';
          this.setState({ fieldSet, prisonerId: '' });
        }
      })
      .catch((error) => {
        dispatch({
          type: 'ERROR_PAGE',
          payload: { ErrorPage: error.response.status },
        });
      });
  };

  getDetails = async () => {
    const { match: { params: { id } }, context: { dispatch } } = this.props;
    axios(`/api/v2/participant/${id}`)
      .then(async (result) => {
        this.getPrison();
        const { data } = result;
        const date = data.date_of_birth.split('T')[0];
        this.setState({ ...data, date_of_birth: date, loading: false });
      })
      .catch((error) => {
        dispatch({
          type: 'ERROR_PAGE',
          payload: { ErrorPage: error.response.status },
        });
      });
  };

  updateParticipant = async (obj) => {
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
      const result = await axios(`/api/v2/participant/${id}`, {
        method: 'PUT',
        data: {
          participantData: obj,
        },
      });
      if (result.data.error) {
        await swal({
          title: '',
          type: 'warning',
          html: result.data.error,
          confirmButtonText: 'Ok',
        });
        history.push('/participants/view');
      } else {
        await swal({
          title: 'Success',
          type: 'success',
          html: result.data.message,
        });
        this.setState({ ...obj });
        history.push('/participants/view');
      }
    }
  };

  componentDidMount = () => {
    this.getDetails();
  };

  // Edit Data
  onSubmit = (event) => {
    event.preventDefault();
    const fields = { ...this.state };
    this.updateParticipant(fields);
  };

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      loading,
    } = this.state;
    if (loading) { return <Loading />; }

    return (
      <>
        <Form
          title="Participant Details"
          fields={fieldSet}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.onSubmit, this.goBack, this.goPrison, this.goDates, this.goTrainings]}
        />
        <Footer />
      </>
    );
  }
}

export default contextHoc(index);

index.propTypes = {
  match: propTypes.isRequired,
  history: propTypes.isRequired,
};
