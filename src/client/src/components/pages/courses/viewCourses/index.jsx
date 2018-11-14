import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import Input from "../../../abstract/input";
import axios from "axios";

export default class Courses extends Component {
  state = {
    search: "",
    rows: []
  };
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  componentDidMount = async () => {
    try {
      const data = await axios("/courses");
      const finalData = data.data.coursesData;
      const array = [["Course Name", "Course Id", "start", "end", "Action"]];
      finalData.map(row =>
        array.push([
          row.course_name,
          row.id,
          row.course_start.split('T')[0],
          row.course_end.split('T')[0],
          <>
            <i className="fas fa-trash-alt" />
            <Link to="/courses/details">
              <i className="fas fa-info-circle" />
            </Link>
          </>
        ])
      );
      this.setState({ rows: array });
    } catch (err) {
      console.log(err); // waiting for boundery error handling
    }
  };
  render() {
    return (
      <React.Fragment>
        <section className="section-view">
          <Header value="Courses" />
          <div className="search-bar">
            <Input
              label="Search"
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
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}
