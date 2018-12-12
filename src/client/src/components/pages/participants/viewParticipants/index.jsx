/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';
import Header from '../../../abstract/header';
import Input from '../../../abstract/input';
import Table from '../../../abstract/Table';
import Footer from '../../../abstract/footer';
import './style.css';
import Loading from '../../loading';

export default class ViewParticpants extends Component {
  state = {
    surenameSearch: '',
    dateSearch: '',
    rows: [],
    message: '',
    filter: '',
    loading: true,
  };

  surnameSearcher = async () => {
    const { surenameSearch } = this.state;
    const data = await axios('/api/v2/participants/search/name', {
      method: 'POST',
      data: {
        participantName: surenameSearch,
      },
    });
    const finalData = data.data.searchResult;
    if (finalData) {
      const array = [['BB_No.', 'fullname', 'Date Of Birth', 'borough', 'Email', 'Action']];
      finalData.map(row => array.push([
        row.id,
        `${row.forename} ${row.surename}`,
        row.date_of_birth.split('T')[0],
        row.borough,
        row.email,
          <>
            <Link to={`/participant/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
            <i className="fas fa-trash-alt" onClick={() => this.onDelete(row.id)} />
          </>,
      ]));
      this.setState({ rows: array });
    } else {
      const array = [];
      const msg = data.data.message;
      this.setState({ message: msg, rows: array });
    }
  };

  onChangeForeName = (event) => {
    const forenameSearch = event.target.value;
    this.setState({ forenameSearch }, () => this.forenameSearcher());
  };

  onChangeSurName = (event) => {
    const surenameSearch = event.target.value;
    this.setState({ surenameSearch }, () => this.surnameSearcher());
  };

  dateSearcher = async () => {
    const { dateSearch } = this.state;
    const data = await axios('/api/v2/participants/search/date', {
      method: 'POST',
      data: {
        participantDate: dateSearch,
      },
    });
    const finalData = data.data.searchResult;
    if (finalData) {
      const array = [['BB_No.', 'Fullname', 'Date Of Birth', 'borough', 'Email', 'Action']];
      finalData.map(row => array.push([
        row.id,
        `${row.forename} ${row.surename}`,
        row.date_of_birth.split('T')[0],
        row.borough,
        row.email,
          <>
            <Link to={`/participant/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
            <i className="fas fa-trash-alt" onClick={() => this.onDelete(row.id)} />
          </>,
      ]));
      this.setState({ rows: array });
    } else {
      const array = [];
      const msg = data.data.message;
      this.setState({ message: msg, rows: array });
    }
  };

  onChangeDate = (event) => {
    const dateSearch = event.target.value;
    this.setState({ dateSearch }, () => this.dateSearcher());
  };

  onDelete = (id) => {
    swal({
      type: 'warning',
      html: 'Are you sure that you want to delete this participant ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then((confirm) => {
      if (confirm.value) {
        axios('/api/v2/participant', {
          method: 'DELETE',
          data: {
            participantId: id,
          },
        }).then((result) => {
          this.getAllParticipants().then(() => {
            swal({
              title: 'Success',
              type: 'success',
              html:
                ` <strong>Your work has been saved</strong> <br/>${
                  result.data.message}`,
              showConfirmButton: false,
              timer: 3000,
            }).then(() => {
              this.getAllParticipants();
            });
          });
        });
      }
    });
  };

  // axios to make requests from backend..
  getAllParticipants = async () => {
    try {
      const data = await axios('/api/v2/participants');
      const finalData = data.data.getParticipants;
      let array = [['BB_No.', 'fullname', 'Date Of Birth', 'borough', 'Email', 'Action']];
      if (finalData.length === 0) {
        const msg = 'There is no participants yet !!';
        array = [];
        this.setState({ message: msg, rows: array, loading: false });
      } else {
        finalData.map(row => array.push([
          row.id,
          `${row.forename} ${row.surename}`,
          row.date_of_birth.split('T')[0],
          row.borough,
          row.email,
          <Fragment>
            <Link to={`/participant/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
            <i className="fas fa-trash-alt" onClick={() => this.onDelete(row.id)} />
          </Fragment>,
        ]));
        this.setState({ rows: array, loading: false });
      }
    } catch (err) {
      console.log(err); // waiting for boundery error handling
    }
  };

  componentDidMount = async () => {
    this.getAllParticipants();
  };

  render() {
    const {
      loading, dateSearch, rows, message, surenameSearch,
    } = this.state;
    if (loading) return <Loading />;
    return (
      <Fragment>
        <section className="section-view">
          <Header value="View Participants" />
          <div className="search-bar">
            <Input
              label="Search by full name"
              name="surenameSearch"
              type="text"
              placeholder="surname"
              width="350px"
              value={surenameSearch}
              onChange={this.onChangeSurName}
            />
            <Input
              label="Search by date of birth"
              name="searchByDate"
              type="date"
              placeholder="date of birth"
              width="350px"
              value={dateSearch}
              onChange={this.onChangeDate}
            />
          </div>
          <Header value="Participants" align="left" margin="0" />
          <Table rows={rows} />
          {rows.length === 0 && (
            <p className="error-msg">
              <i className="far fa-surprise" />
              {message}
            </p>
          )}
          <Footer />
        </section>
      </Fragment>
    );
  }
}
