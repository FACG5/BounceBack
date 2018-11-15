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
    message:"",
    rows: []
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  deleteManager = id => {
    swal({
      type: 'warning',
      html:'Are you sure that you want to delete this manager ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:'<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText:'<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
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
    const data = await axios("/managers");
    const finalData = data.data.managersData;
    let array = [["username", "email", "action"]];
    if (finalData.length === 0){
      const msg = ' There is no managers yet !!';
      array =[];          
      this.setState({ message: msg,rows:array});
    }
    else{
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
    }
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
          { this.state.rows.length === 0 &&
            <p className="error-msg"> <i class="far fa-surprise"></i>{this.state.message}</p>
          }
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}
