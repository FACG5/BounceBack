import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Header from "../../../abstract/header";
import Input from "../../../abstract/input";
import DropDown from "../../../abstract/dropdown";
import Button from "../../../abstract/button";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import axios from 'axios';
import swal from "sweetalert2";
import "./style.css";

export default class ViewParticpants extends Component {
  state = {
    search: "",
    rows: [],
    message: "",
    filter: "",
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  clear = () => {
    this.setState({ search: "" });
  };

  onDelete = id =>{
    swal({
      title: "Warning",
      text: "Are you sure that you want to delete this participant ?",
      type: "warning",
      showCancelButton: true
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
              title: "success",
              text: result.data.message,
              type: "success",
              confirmButtonText: "Cool"
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
        const msg = ' There is no participant yet !!';
        array =[];          
        this.setState({ message: msg,rows:array});
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
            <Link to="/participant/details">
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
              label="Search"
              name="search"
              type="text"
              placeholder="Type Username"
              width="300px"
              value={this.state.search}
              onChange={this.onChange}
            />
            <DropDown
              label="Filter By:"
              name="filter"
              options={["name", "mobile", "date of birth"]}
              width="150px"
              value={this.state.filter}
              onChange={this.onChange}
            />
            <div className="buttons">
              <Button value="Search" color="#272727" />
              <Button value="Clear" color="#FF4800" onClick={this.clear} />
            </div>
          </div>
          <Header value="Participants" align='left' margin='0'/>
          <Table
            rows={this.state.rows}
          />
          { this.state.rows.length === 0 &&

          <p className="error-msg"> <i class="far fa-surprise"></i>{this.state.message}</p>
          }
          <Footer />
        </section>
      </Fragment>
    );
  }
}
