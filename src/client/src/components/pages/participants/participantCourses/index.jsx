import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import Button from "../../../abstract/button";

export default class Course extends Component {
  state = {
    search: "",
    rows: [
      ["Course name", "Course Id", "Start", "End", "Action"],
      [
        "Course Title",
        "9868686",
        "15/5/2017",
        "15/12/2017",
        <React.Fragment>
          <i className="fas fa-trash-alt" />
          <Link to="/participants/course/details">
            <i className="fas fa-info-circle" />
          </Link>
        </React.Fragment>
      ],
      [
        "Course Title",
        "9868686",
        "15/5/2017",
        "15/12/2017",
        <React.Fragment>
          <i className="fas fa-trash-alt" />
          <Link to="/participants/course/details">
            <i className="fas fa-info-circle" />
          </Link>
        </React.Fragment>
      ],
      [
        "Course Title",
        "9868686",
        "15/5/2017",
        "15/12/2017",
        <React.Fragment>
          <i className="fas fa-trash-alt" />
          <Link to="/participants/course/details">
            <i className="fas fa-info-circle" />
          </Link>
        </React.Fragment>
      ],
      [
        "Course Title",
        "9868686",
        "15/5/2017",
        "15/12/2017",
        <React.Fragment>
          <i className="fas fa-trash-alt" />
          <Link to="/participants/course/details">
            <i className="fas fa-info-circle" />
          </Link>
        </React.Fragment>
      ]
    ]
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  goAdd = event => {
    this.props.history.push("/participants/course/add");
  };
  goBack = event => {
    this.props.history.push("/participant/details");
  };
  render() {
    return (
      <React.Fragment>
        <Header value="View Courses" />
        <Table rows={this.state.rows} />
        <Button value="Add Course" onClick={this.goAdd} color="#272727" />
        <Button value="Back" color="#FF4800" onClick={this.goBack}/>
        <Footer />
      </React.Fragment>
    );
  }
}
