/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';
import Header from '../../../abstract/header';
import Input from '../../../abstract/input';
import Table from '../../../abstract/Table';
import Footer from '../../../abstract/footer';
import Loading from '../../loading';

export default class ViewManagers extends Component {
  state = {
    search: '',
    message: '',
    rows: [],
    loading: true,
  };

  deleteManager = (id) => {
    swal({
      type: 'warning',
      html: 'Are you sure that you want to delete this manager ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i className="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i className="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then((confirm) => {
      if (confirm.value) {
        axios('/api/v2/managers', {
          method: 'DELETE',
          data: {
            managerId: id,
          },
        }).then((result) => {
          this.getData().then(() => {
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
        });
      }
    });
  };

  search = async () => {
    const { search } = this.state;
    const data = await axios('/api/v2/managers/search', {
      method: 'POST',
      data: {
        managerName: search,
      },
    });
    const finalData = data.data.managersData;
    if (finalData) {
      const array = [['username', 'email', 'Phone Number', 'action']];
      finalData.map(row => array.push([
        row.username,
        row.email,
        row.mobile,
          <>
            <Link to={`/manager/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
            <i
              className="fas fa-trash-alt"
              onClick={() => this.deleteManager(row.id)}
            />
          </>,
      ]));
      this.setState({ rows: array });
    } else {
      const array = [];
      const msg = data.data.message;
      this.setState({ message: msg, rows: array });
    }
  };

  onChange = (event) => {
    const search = event.target.value;
    this.setState({ search }, () => this.search());
  };

  getData = async () => {
    const data = await axios('/api/v2/managers');
    const finalData = data.data.managersData;
    let array = [['username', 'email', 'phone number', 'action']];
    if (finalData.length === 0) {
      const msg = ' There is no managers yet !!';
      array = [];
      this.setState({ message: msg, rows: array, loading: false });
    } else {
      finalData.map(row => array.push([
        row.username,
        row.email,
        row.mobile,
          <>
            <Link to={`/manager/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
            <i
              className="fas fa-trash-alt"
              onClick={() => this.deleteManager(row.id)}
            />
          </>,
      ]));
      this.setState({ rows: array, loading: false });
    }
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    const {
      loading, search, rows, message,
    } = this.state;
    if (loading) return <Loading />;
    return (
      <>
        <section className="section-view">
          <Header value="View Managers" />
          <Input
            label="Search"
            name="search"
            type="text"
            placeholder="manager username"
            width="300px"
            value={search}
            onChange={this.onChange}
          />
          <Header value="Managers" align="left" margin="0" />
          <Table rows={rows} />
          {rows.length === 0 && (
            <p className="error-msg">
              {' '}
              <i className="far fa-surprise" />
              {message}
            </p>
          )}
          <Footer />
        </section>
      </>
    );
  }
}
