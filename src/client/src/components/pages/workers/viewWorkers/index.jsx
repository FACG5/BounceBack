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

  deleteWorker = id => {
    if (window.confirm("Are you sure that you want to delete this worker ?")) {
      axios("/workers", {
        method: "DELETE",
        data: {
          workerId: id
        }
      }).then(result => {
        this.getData().then(() => {
          alert(result.data.message);
        });
      });
    }
  };

  getData = async () => {
    try {
      const data = await axios("/workers");
      const finalData = data.data.workersData;
      const array = [["username", "date of birth", "action"]];
      finalData.map(row =>
        array.push([
          row.username,
          row.date_of_birth.split("T")[0],
          <>
          <i className="fas fa-trash-alt" onClick={() => this.deleteWorker(row.id)} />
          <Link to="/worker/details">
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

  componentDidMount = () => {
    this.getData();
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
