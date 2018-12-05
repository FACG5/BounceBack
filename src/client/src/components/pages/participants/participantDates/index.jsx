/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';
import propTypes from 'prop-types';
import Header from '../../../abstract/header';
import Table from '../../../abstract/Table';
import Footer from '../../../abstract/footer';
import Button from '../../../abstract/button';
import contextHoc from '../../../abstract/HOC/contextHoc';
import Loading from '../../loading';

class Date extends Component {
  state = {
    search: '',
    rows: [],
    message: '',
    loading: true,
  };

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goAdd = () => {
    const { match: { params: { id } }, history } = this.props;
    history.push(`/participants/${id}/date/add`);
  };

  goBack = () => {
    const { match: { params: { id } }, history } = this.props;
    history.push(`/participant/details/${id}`);
  };

  // axios to make requests from backend..
  getDates = async () => {
    const { match: { params: { id } }, context: { dispatch } } = this.props;
    try {
      const result = await axios(`/api/v2/participant/${id}/dates`);
      const dates = result.data.participantDates;
      let array = [['Worker Name', 'date', 'Action']];
      if (dates.length === 0) {
        const msg = 'There is no dates yet !!';
        array = [];
        this.setState({ message: msg, rows: array, loading: false });
      } else {
        dates.map(row => array.push([
          row.worker_name,
          row.date.split('T')[0],
            <>
              <Link to={`/participant/${id}/date/details/${row.id}`}>
                <i className="fas fa-info-circle" />
              </Link>
              <i
                className="fas fa-trash-alt"
                onClick={() => this.onDelete(row.id)}
              />
            </>,
        ]));
        this.setState({ rows: array, loading: false });
      }
    } catch (err) {
      dispatch({
        type: 'ERROR_PAGE',
        payload: { ErrorPage: err.response.status },
      });
    }
  };

  componentDidMount = async () => {
    this.getDates();
  };

  // Delete an exist date
  onDelete = (id) => {
    swal({
      type: 'warning',
      html: 'Are you sure that you want to delete this date ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then((confirm) => {
      if (confirm.value) {
        axios('/api/v2/date', {
          method: 'DELETE',
          data: {
            dateId: id,
          },
        }).then((result) => {
          this.getDates();
          swal({
            title: 'Success',
            type: 'success',
            html:
              ` <strong>Your work has been saved</strong> <br/>${
                result.data.message}`,
            showConfirmButton: false,
            timer: 3000,
          });
        });
      }
    });
  };

  render() {
    const { loading, rows, message } = this.state;
    if (loading) return <Loading />;
    return (
      <>
        <Header value="View Dates" />
        <Table rows={rows} />
        {rows.length === 0 && (
          <p className="error-msg">
            <i className="far fa-surprise" />
            {message}
          </p>
        )}
        <Button value="Add Date" color="#272727" onClick={this.goAdd} />
        <Button value="Back" color="#FF4800" onClick={this.goBack} />
        <Footer />
      </>
    );
  }
}

export default contextHoc(Date);

Date.propTypes = {
  match: propTypes.isRequired,
  history: propTypes.isRequired,
};
