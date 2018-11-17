import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import Input from "../../../abstract/input";
import axios from "axios";
import swal from "sweetalert2";

export default class Courses extends Component {
  state = {
    search: "",
    message:"",
    rows: []
  };

  getSearch = async () => {
    const { search } = this.state;
    const data = await axios("/courses/search", {
      method: "POST",
      data: {
        courseName: search
      }
    });
    const finalData = data.data.result;
    if (finalData) {
      let array = [["Course Name", "start", "end", "Action"]];
      finalData.map(row =>
        array.push([
          row.course_name,
          row.course_start.split("T")[0],
          row.course_end.split("T")[0],
          <>
           <i
              className="fas fa-trash-alt" onClick={() => this.deleteCourse(row.id)}
            />
            <Link to="/courses/details">
              <i className="fas fa-info-circle" />
            </Link>
          </>
        ])
      );
      this.setState({ rows: array });
    } else {
      const arr = [];
      const msg = data.data.message;
      this.setState({ message: msg, rows: arr });
    }
  };      

  onChange = event => {
    const search = event.target.value;
    this.setState({ search }, () => this.getSearch());
  };

  deleteCourse = id => {
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
        axios("/courses", {
          method: "DELETE",
          data: {
            courseId: id
          }
        }).then(result => {
          this.getData().then(() => {
            swal({
              title: 'Success',
              type: 'success',
              html: ' <strong>Your work has been saved</strong> <br/>' +result.data.message,
              showConfirmButton: false,
              timer: 3000
            });
          });
        });
      }
    });
  };

  getData = async () => {
    try {
      const data = await axios("/courses");
      const finalData = data.data.coursesData;
      let array = [["Course Name", "start", "end", "Action"]];
      if (finalData.length === 0){
        const msg = ' There is no courses yet !!';
        array =[];          
        this.setState({ message: msg,rows:array});
      }else {
      finalData.map(row =>
        array.push([
          row.course_name,
          row.course_start.split("T")[0],
          row.course_end.split("T")[0],
          <>
            <i
              className="fas fa-trash-alt"
              onClick={() => this.deleteCourse(row.id)}
            />
            <Link to="/courses/details">
              <i className="fas fa-info-circle" />
            </Link>
          </>
        ])
      );
      this.setState({ rows: array });
      }
    } catch (err) {
      console.log(err); // waiting for boundery error handling
    }
  };

  componentDidMount = () => {
    this.getData();
  };
  render() {
    return (
      <>
        <section className="section-view">
          <Header value="Courses" />
          <div className="search-bar">
            <Input
              label="Search by course name"
              name="search"
              type="text"
              placeholder="Type Username"
              width="300px"
              value={this.state.search}
              onChange={this.onChange}
            />
          </div>
          <Header value="Courses" align="left" margin="0" />
          <Table rows={this.state.rows} />
          { this.state.rows.length === 0 &&
            <p className="error-msg"> <i class="far fa-surprise"></i>{this.state.message}</p>
          }
          <Footer />
        </section>
      </>
    );
  }
}
