import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Table from "../../../abstract/Table";
import Input from "../../../abstract/input";
import Footer from "../../../abstract/footer";
import axios from "axios";

export default class ViewWorkers extends Component {
  state = {
    search: "",
    rows: []
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  componentDidMount = async () => {
    try {
      const data = await axios("/workers");
      const finalData = data.data.workersData;
      console.log(finalData);
      const array = [["username", "date of birth", "action"]];
      finalData.map(row =>
        array.push([
          row.username,
          row.date_of_birth,
          <Link to="/worker/details">
            <i className="fas fa-info-circle" />
          </Link>
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
          <Header value="View Worker" />
          <Input
            label="Search"
            name="search"
            type="text"
            placeholder="Type Name of manager"
            width="300px"
            value={this.state.search}
            onChange={this.onChange}
          />
          <Header value="Workers" align="left" margin="0" />
          <Table rows={this.state.rows} />
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}
