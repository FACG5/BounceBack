import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Header from "../../../abstract/header";
import Input from "../../../abstract/input";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import axios from 'axios';
import swal from "sweetalert2";
import "./style.css";

export default class ViewParticpants extends Component {
  state = {
    nameSearch: "",
    dateSearch: "",
    rows: [],
    message: "",
    filter: "",
  };

  nameSearcher = async () => {
    const { nameSearch } = this.state;
    const data = await axios("/participants/search/name", {
      method: "POST",
      data: {
        participantName: nameSearch
      }
    });
    const finalData = data.data.searchResult;
    if (finalData) {
      let array = [["BB_No.","Full Name", "Date Of Birth", "Email", "Action"]];
      finalData.map(row =>
        array.push([
          row.id,
          row.fullname,
          row.date_of_birth.split('T')[0],
          row.email,
          <>
           <i className="fas fa-trash-alt"  onClick={() => this.onDelete(row.id)}/>
            <Link to= {`/participant/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
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

  onChangeName = event => {
    const nameSearch = event.target.value;
    this.setState({ nameSearch }, () => this.nameSearcher());
  };

  dateSearcher = async () => {
    const { dateSearch } = this.state;
    const data = await axios("/participants/search/date", {
      method: "POST",
      data: {
        participantDate: dateSearch
      }
    });
    const finalData = data.data.searchResult;
    if (finalData) {
      let array = [["BB_No.","Full Name", "Date Of Birth", "Email", "Action"]];
      finalData.map(row =>
        array.push([
          row.id,
          row.fullname,
          row.date_of_birth.split('T')[0],
          row.email,
          <>
           <i className="fas fa-trash-alt"  onClick={() => this.onDelete(row.id)}/>
            <Link to= {`/participant/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
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

  onChangeDate = event => {
    const dateSearch = event.target.value;
    this.setState({ dateSearch }, () => this.dateSearcher());
  };

  onDelete = id =>{
    swal({
      type: 'warning',
      html:'Are you sure that you want to delete this participant ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:'<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText:'<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then(confirm => {
      if (confirm.value) {
        axios("/participant", {
          method: "DELETE",
          data: {
            participantId: id
          }
        }).then(result => {
          this.getAllParticipants().then(() => {
            swal({
              title: 'Success',
              type: 'success',
              html: ' <strong>Your work has been saved</strong> <br/>' +result.data.message,
              showConfirmButton: false,
              timer: 3000
            }).then(() => {
              this.getAllParticipants();
            })
          });
        });
      }
    });
};
  
// axios to make requests from backend.. 
getAllParticipants = async () => {
    try {
      const data = await axios("/participants");
      const finalData = data.data.getParticipants;
      let array = [["BB_No.","Full Name", "Date Of Birth", "Email", "Action"]];
      if (finalData.length === 0){
        const msg = 'There is no participants yet !!';
        array =[];          
        this.setState({ message: msg, rows:array});
      }
      else{    
      finalData.map(row =>
        array.push([
          row.id,
          row.fullname,
          row.date_of_birth.split('T')[0],
          row.email,
          <Fragment>
            <i className="fas fa-trash-alt"  onClick={() => this.onDelete(row.id)}/>
            <Link to= {`/participant/details/${row.id}`}>
              <i className="fas fa-info-circle" />
            </Link>
          </Fragment>
        ])
      );
      this.setState({ rows: array });
      }
    } catch (err) {
      console.log(err); // waiting for boundery error handling
    }
  };

  componentDidMount = async () => {
  this.getAllParticipants();
  };

  render() {
    return (
      <Fragment>
        <section className="section-view">
          <Header value="View Participants" />
          <div className="search-bar">
            <Input
              label="Search by name"
              name="searchByName"
              type="text"
              placeholder="Type Fullname"
              width="350px"
              value={this.state.nameSearch}
              onChange={this.onChangeName}
            />
            <Input
              label="Search By Birth of date"
              name="searchByDate"
              type="date"
              placeholder="Type birth of date"
              width="350px"
              value={this.state.dateSearch}
              onChange={this.onChangeDate}
            />
          </div>
          <Header value="Participants" align='left' margin='0'/>
          <Table
            rows={this.state.rows}
          />
          {this.state.rows.length === 0 && (
            <p className="error-msg">
              <i className="far fa-surprise" />
              {this.state.message}
            </p>
          )}
          <Footer />
        </section>
      </Fragment>
    );
  }
}
