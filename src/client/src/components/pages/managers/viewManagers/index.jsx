import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Input from "../../../abstract/input";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import axios from "axios";
import swal from 'sweetalert2';

export default class ViewManagers extends Component {
  state = {
    search: "",
    rows: []
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  deleteManager = id => {
    swal({
      title: "",
      text: "Are you sure that you want to delete this manager ?",
      type: "warning",
      showCancelButton: true
    }).then(confirm => {
      if (confirm.value) {
        axios("/managers", {
          method: "DELETE",
          data: {
            managerId: id
          }
        }).then(result => {
          this.getData().then(() => {
            swal({
              title: "success",
              text: result.data.message,
              type: "success",
              confirmButtonText: "Cool"
            });
          });
        });
      }
    });
  };

  getData = async () => {
    const data = await axios("/managers");
    const finalData = data.data.managersData;
    const array = [["username", "email", "action"]];
    finalData.map(row =>
      array.push([
        row.fullname,
        row.email,
        <>
          <i
            className="fas fa-trash-alt"
            onClick={() => this.deleteManager(row.id)}
          />
          <Link to="/courses/details">
            <i className="fas fa-info-circle" />
          </Link>
        </>
      ])
    );
    this.setState({ rows: array });
  };
  componentDidMount = () => {
    this.getData();
  };
  render() {
    return (
      <React.Fragment>
        <section className="section-view">
          <Header value="View Managers" />
          <Input
            label="Search"
            name="search"
            type="text"
            placeholder="Type Name of manager"
            width="300px"
            value={this.state.search}
            onChange={this.onChange}
          />
          <Header value="Managers" align="left" margin="0" />
          <Table rows={this.state.rows} />
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}
