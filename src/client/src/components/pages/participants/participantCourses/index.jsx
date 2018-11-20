import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import Button from "../../../abstract/button";
import axios from 'axios';
import contextHoc from './../../../abstract/HOC/contextHoc';
import swal from "sweetalert2";

class Course extends Component {
  state = {
    search: '',
    rows: [ ],
    message: '',
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goAdd = event => {
    this.props.history.push("/participants/course/add");
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
      let array = [["Participan Id/ name", "Course Id/ name", "Start", "End", "Action"]];
      if (courses.length === 0){
        const msg = 'There is no courses yet !!';
        array =[];          
        this.setState({ message: msg, rows:array});
      }
      else{    
      courses.map(row =>
        array.push([
          row.participant_id,
          row.course_id,
          row.course_start.split("T")[0],
          row.course_end.split("T")[0],
          <>
             <i className="fas fa-trash-alt"  onClick={() => this.onDelete(row.id)}/>
             <Link to= {`/participant/${id}/course/details/${row.id}`}>
               <i className="fas fa-info-circle" />
             </Link>
           </>
         ])
       );
       this.setState({ rows: array });
       }
    } catch (err) {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: err.response.status } })
    }
};

  componentDidMount = async () => {
    this.getCourses();
  };

  //Delete an exist course
  onDelete = id =>{
    swal({
      type: 'warning',
      html:'Are you sure that you want to delete this course ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:'<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText:'<i class="fa fa-thumbs-down"></i> No ',
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
              html: ' <strong>Your work has been saved</strong> <br/>' +result.data.message,
              showConfirmButton: false,
              timer: 3000
            })
        });
      }
    });
};

  render() {
    return (
      <React.Fragment>
        <Header value="View Courses" />
        <Table rows={this.state.rows} />
        {this.state.rows.length === 0 && (
            <p className="error-msg">
              <i className="far fa-surprise" />
              {this.state.message}
            </p>
        )}
        <Button value="Add Course" onClick={this.goAdd} color="#272727" />
        <Button value="Back" color="#FF4800" onClick={this.goBack}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default contextHoc(Course);