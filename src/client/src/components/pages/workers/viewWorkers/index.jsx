import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Table from "../../../abstract/Table";
import Input from "../../../abstract/input";
import Footer from "../../../abstract/footer";
import axios from "axios";
import swal from 'sweetalert2'

export default class ViewWorkers extends Component {
  state = {
    search: "",
    message: "",
    rows: []
  };

  deleteWorker = id => {
    swal({
      type: 'warning',
      html:'Are you sure that you want to delete this worker ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:'<i className="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText:'<i className="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then((confirm) => {
      if (confirm.value) {

        axios("/api/v2/workers", {
          method: "DELETE",
          data: {
            workerId: id
          }
        }).then(resultSearch => {
          this.getData().then(() => {
            swal({
              title: 'Success',
              type: 'success',
              html: ' <strong>Your work has been saved</strong> <br/>' +resultSearch.data.message,
              showConfirmButton: false,
              timer: 3000
            })
          });
        });
      }
    })
  };

  getSearch = async () => {
    const { search } = this.state;
    const data = await axios("/api/v2/workers/search", {
      method: "POST",
      data: {
        workerName: search
      }
    });
    const finalData = data.data.resultSearch;
    if (finalData) {
      let array = [["username", "date of birth", "action"]];
      finalData.map(row =>
        array.push([
          row.username,
          row.date_of_birth.split("T")[0],
          <>
            <Link to ={`/worker/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
            <i className="fas fa-trash-alt" onClick={() => this.deleteWorker(row.id)} />
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

  getData = async () => {
    try {
      const data = await axios("/api/v2/workers");
      const finalData = data.data.workersData;
      let array = [["username", "date of birth", "action"]];
      if (finalData.length === 0){
        const msg = ' There is no workers yet !!';
        array =[];          
        this.setState({ message: msg,rows:array});
      } else{
        finalData.map(row =>
          array.push([
            row.username,
            row.date_of_birth.split("T")[0],
            <>
            <Link to={`/worker/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
            <i className="fas fa-trash-alt" onClick={() => this.deleteWorker(row.id)} />
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
          { this.state.rows.length === 0 &&
            <p className="error-msg"> <i className="far fa-surprise"></i>{this.state.message}</p>
          }
          <Footer />
        </section>
      </>
    );
  }
}
