/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';
import Header from '../../../abstract/header';
import Table from '../../../abstract/Table';
import Footer from '../../../abstract/footer';
import Input from '../../../abstract/input';
import Loading from '../../loading';

export default class Courses extends Component {
  state = {
    search: '',
    message: '',
    rows: [],
    loading: true,
  };

  getSearch = async () => {
    const { search } = this.state;
    const data = await axios('/api/v2/courses/search', {
      method: 'POST',
      data: {
        searchInput: search,
      },
    });
    const finalData = data.data.result;
    if (finalData) {
      const array = [['Intervention Name', 'start', 'end', 'type', 'Action']];
      finalData.map(row => array.push([
        row.course_name,
        row.course_start.split('T')[0],
        row.course_end.split('T')[0],
        row.type,
          <>
            {row.type === 'trainings' ? (
              <Link to={`/trainings/details/${row.id}`}>
                <i className="fas fa-info-circle" />
              </Link>
            ) : (
              <Link to={`/pastoral/details/${row.id}`}>
                <i className="fas fa-info-circle" />
              </Link>
            )}
            <i
              className="fas fa-trash-alt"
              onClick={() => this.deleteCourse(row.id)}
            />
          </>,
      ]));
      this.setState({ rows: array });
    } else {
      const arr = [];
      const msg = data.data.message;
      this.setState({ message: msg, rows: arr });
    }
  };

  onChange = (event) => {
    const search = event.target.value;
    this.setState({ search }, () => this.getSearch());
  };

  deleteCourse = (id) => {
    swal({
      type: 'warning',
      html: 'Are you sure that you want to delete this course ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i className="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i className="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then((confirm) => {
      if (confirm.value) {
        axios('/api/v2/courses', {
          method: 'DELETE',
          data: {
            courseId: id,
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

  getData = async () => {
    try {
      const data = await axios('/api/v2/courses');
      const finalData = data.data.coursesData;
      let array = [['Intervention Name', 'start', 'end', 'type', 'Action']];
      if (finalData.length === 0) {
        const msg = ' There is no courses yet !!';
        array = [];
        this.setState({ message: msg, rows: array, loading: false });
      } else {
        finalData.map(row => array.push([
          row.course_name,
          row.course_start.split('T')[0],
          row.course_end.split('T')[0],
          row.type,
            <>
              {row.type === 'trainings' ? (
                <Link to={`/trainings/details/${row.id}`}>
                  <i className="fas fa-info-circle" />
                </Link>
              ) : (
                <Link to={`/pastoral/details/${row.id}`}>
                  <i className="fas fa-info-circle" />
                </Link>
              )}
              <i
                className="fas fa-trash-alt"
                onClick={() => this.deleteCourse(row.id)}
              />
            </>,
        ]));
        this.setState({ rows: array, loading: false });
      }
    } catch (err) {
      console.log(err); // waiting for boundery error handling
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
          <Header value="Interventions" />
          <div className="search-bar">
            <Input
              label="Search by intervention name/type"
              name="search"
              type="text"
              placeholder="intervention name/type"
              width="300px"
              value={search}
              onChange={this.onChange}
            />
          </div>
          <Header value="Intervention" align="left" margin="0" />
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
