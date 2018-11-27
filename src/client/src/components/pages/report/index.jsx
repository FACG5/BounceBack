import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../abstract/header";
import Button from "../../abstract/button";
import Footer from "../../abstract/footer";
import Input from "../../abstract/input";
import DropDown from "../../abstract/dropdown";
import "./style.css";

export default class index extends Component {
  state = {
    from: "",
    to: "",
    bounceback: false,
    project: false,
    ofg: false,
    mtg: false,
    active: false,
    inactive: false
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  changeCheckBox = event => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  render() {
    const {
      from,
      to,
      bounceback,
      project,
      ofg,
      mtg,
      active,
      inactive
    } = this.state;
    return (
      <>
        <section className="section-view">
          <Header value="Report" />
          <div className="period-section">
            <p>Select the period to get the report</p>
            <div className="selected-period">
              <Input
                label="From"
                name="from"
                value={from}
                onChange={this.onChange}
                type="date"
                placeholder="from"
                width="20rem"
              />
              <Input
                label="To"
                name="to"
                value={to}
                onChange={this.onChange}
                type="date"
                placeholder="to"
                width="20rem"
              />
            </div>
          </div>
          <div className="criteria-section">
            <p>Check the criteria that you want :</p>
            <input
              type="checkbox"
              name="bounceback"
              checked={bounceback}
              onChange={this.changeCheckBox}
            />{" "}
            Bounceback <br />
            <input type="checkbox"
              name="project"
              checked={project}
              onChange={this.changeCheckBox}
            />{" "}
            Project I.e. <br />
            <input
              type="checkbox"
              name="ofg"
              checked={ofg}
              onChange={this.changeCheckBox}
            />{" "}
            OFG <br />
            <input
              type="checkbox"
              name="mtg"
              checked={mtg}
              onChange={this.changeCheckBox}
            />{" "}
            MTG <br />
            <input
              type="checkbox"
              name="active"
              checked={active}
              onChange={this.changeCheckBox}
            />
            Active <br />
            <input
              type="checkbox"
              name="inactive"
              checked={inactive}
              onChange={this.changeCheckBox}
            />
            In Active <br />
          </div>
          <div className="worker-section">
            <div className="selected-worker">
              <p>Choose the case worker if you want a specific one:</p>
              <DropDown
                label=""
                name="filter"
                options={["all", "worker1", "worker2", "worker3", "worker4"]}
                width="250px"
                value={this.state.filter}
                onChange={this.onChange}
              />
            </div>
          </div>
          <Link to="/report/result">
            <Button
              value="View Report"
              color="#ff4800"
              onClick={this.onClick}
            />{" "}
          </Link>
          <Footer />
        </section>
      </>
    );
  }
}
