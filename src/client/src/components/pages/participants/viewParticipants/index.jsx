import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Header from "../../../abstract/header";
import Input from "../../../abstract/input";
import DropDown from "../../../abstract/dropdown";
import Button from "../../../abstract/button";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import axios from 'axios';
import "./style.css";

export default class ViewParticpants extends Component {
  state = {
    search: "",
    rows: [],
    filter: "",
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  clear = () => {
    this.setState({ search: "" });
  };
  
// axios to make requests from backend.. 
  componentDidMount = async () => {
    try {
      const data = await axios("/participants");
      const finalData = data.data.participants;
      const array = [["Full Name", "Date Of Birth", "Email", "Action"]];
      finalData.map(row =>
        array.push([
          row.fullname,
          row.date_of_birth.split('T')[0],
          row.email,
          <Fragment>
            <i className="fas fa-trash-alt" />
            <Link to="/participant/details">
              <i className="fas fa-info-circle" />
            </Link>
          </Fragment>
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
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}
