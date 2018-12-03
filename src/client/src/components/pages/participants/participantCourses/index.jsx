import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import Button from "../../../abstract/button";
import axios from 'axios';
import contextHoc from './../../../abstract/HOC/contextHoc';
import swal from "sweetalert2";
import Loading from '../../loading';

class Course extends Component {
  state = {
    search: '',
    rows: [],
    message: '',
    loading: true
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goAddTraining = event => {
    const id = this.props.match.params.id;
    this.props.history.push(`/participants/${id}/course/add`);
  };

  goAddPastoral = event => {
    const id = this.props.match.params.id;
    this.props.history.push(`/participants/${id}/pastoral/add`);
  };

  goBack = event => {
    const id = this.props.match.params.id;
    this.props.history.push(`/participant/details/${id}`);
  };

  // axios to make requests from backend.. 
  getCourses = async () => {
    const { dispatch } = this.props.context;
    const { id } = this.props.match.params;
    try {
      const result = await axios(`/api/v2/participant/${id}/courses`);
      const courses = result.data.participantCourses;
      let array = [["Intervention name", "Start", "End", "type", "Note", "Action"]];
      if (courses.length === 0) {
        const msg = 'There is no courses yet !!';
        array = [];
        this.setState({ message: msg, rows: array, loading: false });
      } else {
        courses.map(row =>
          array.push([
            row.course_name,
            row.course_start.split("T")[0],
            row.course_end.split("T")[0],
            row.type,
            row.details,
            <>
            {row.type === 'trainings' ? (
              <Link to={`/participant/${id}/course/details/${row.id}`}>
                <i className="fas fa-info-circle" />
              </Link>
            ) : (
              <Link to={`/participant/${id}/pastoral/details/${row.id}`}>
                <i className="fas fa-info-circle" />
              </Link>
            )}
              <i className="fas fa-trash-alt" onClick={() => this.onDelete(row.id)} />
            </>
          ])
        );
        this.setState({ rows: array, loading: false });
      }
    } catch (err) {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: err.response.status } })
    }
  };

  componentDidMount = async () => {
    this.getCourses();
  };

  //Delete an exist course
  onDelete = id => {
    swal({
      type: 'warning',
      html: 'Are you sure that you want to delete this course ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then(confirm => {
      if (confirm.value) {
        axios("/api/v2/course", {
          method: "DELETE",
          data: {
            courseId: id
          }
        }).then(result => {
          this.getCourses();
          swal({
            title: 'Success',
            type: 'success',
            html: ' <strong>Your work has been saved</strong> <br/>' + result.data.message,
            showConfirmButton: false,
            timer: 3000
          })
        });
      }
    });
  };

  render() {
    const {
      loading
    } = this.state;
    if (loading) return <Loading />;
    return (
      <>
        <Header value="Participant Interventions" />
        <Table rows={this.state.rows} />
        {this.state.rows.length === 0 && (
          <p className="error-msg">
            <i className="far fa-surprise" />
            {this.state.message}
          </p>
        )}
        <Button value="Add Training" onClick={this.goAddTraining} color="#272727" />
        <Button value="Add Pastoral Intervention" onClick={this.goAddPastoral} color="#272727" />
        <Button value="Back" color="#FF4800" onClick={this.goBack} />
        <Footer />
      </>
    );
  }
}

export default contextHoc(Course);