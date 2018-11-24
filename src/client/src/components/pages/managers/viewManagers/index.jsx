import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Input from "../../../abstract/input";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import axios from "axios";
import swal from "sweetalert2";
import Loading from '../../loading';

export default class ViewManagers extends Component {
  state = {
    search: "",
    message: "",
    rows: [],
    loading: true
  };

  deleteManager = id => {
    swal({
      type: "warning",
      html: "Are you sure that you want to delete this manager ?",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i className="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: "Thumbs up",
      cancelButtonText: '<i className="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: "Thumbs down"
    }).then(confirm => {
      if (confirm.value) {
        axios("/api/v2/managers", {
          method: "DELETE",
          data: {
            managerId: id
          }
        }).then(result => {
          this.getData().then(() => {
            swal({
              title: "Success",
              type: "success",
              html:
                " <strong>Your work has been saved</strong> <br/>" +
                result.data.message,
              showConfirmButton: false,
              timer: 3000
            });
          });
        });
      }
    });
  };

  search = async () => {
    const { search } = this.state;
    const data = await axios("/api/v2/managers/search", {
      method: "POST",
      data: {
        managerName: search
      }
    });
    const finalData = data.data.managersData;
    if (finalData) {
      let array = [["username", "email", "action"]];
      finalData.map(row =>
        array.push([
          row.username,
          row.email,
          <>
            <Link to={`/manager/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
            <i
              className="fas fa-trash-alt"
              onClick={() => this.deleteManager(row.id)}
            />
          </>
        ])
      );
      this.setState({ rows: array });
    } else {
      const array = [];
      const msg = data.data.message;
      this.setState({ message: msg, rows: array });
    }
  };

  onChange = event => {
    const search = event.target.value;
    this.setState({ search }, () => this.search());
  };

  getData = async () => {
    const data = await axios("/api/v2/managers");
    const finalData = data.data.managersData;
    let array = [["username", "email", "action"]];
    if (finalData.length === 0) {
      const msg = " There is no managers yet !!";
      array = [];
      this.setState({ message: msg, rows: array, loading: false });
    } else {
      finalData.map(row =>
        array.push([
          row.username,
          row.email,
          <>
            <Link to={`/manager/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
            <i
              className="fas fa-trash-alt"
              onClick={() => this.deleteManager(row.id)}
            />
          </>
        ])
      );
      this.setState({ rows: array, loading: false });
    }
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    const {
      loading
    } = this.state;
    if (loading) return <Loading />;
    return (
      <React.Fragment>
        <section className="section-view">
          <Header value="View Managers" />
          <Input
            label="Search"
            name="search"
            type="text"
            placeholder="manager username"
            width="300px"
            value={this.state.search}
            onChange={this.onChange}
          />
          {/* <Button value="Search" onClick={this.search} /> */}
          <Header value="Managers" align="left" margin="0" />
          <Table rows={this.state.rows} />
          {this.state.rows.length === 0 && (
            <p className="error-msg">
              {" "}
              <i className="far fa-surprise" />
              {this.state.message}
            </p>
          )}
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}
