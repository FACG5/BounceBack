import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../abstract/header';
import Input from '../../abstract/input';
import Table from '../../abstract/Table';
import Footer from '../../abstract/footer'

export default class ViewManagers extends Component {
    state = {
        search: "",
        rows: [
          ["username", "Email", "Details"],
          ["mohannadhanafi", "mohannad@gmail.com", <Link to='/manager/details'><i className="fas fa-info-circle"></i></Link>],
          ["mohannadhanafi", "mohannad@gmail.com", <Link to='/manager/details'><i className="fas fa-info-circle"></i></Link>]
        ]
      };
      onChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };
  render() {
    return (
      <React.Fragment>
        <Header value='View Managers' />
        <Input
            label="Search"
            name="search"
            type="text"
            placeholder="Type Name of manager"
            width="300px"
            value={this.state.search}
            onChange={this.onChange}
          />
          <Table
          rows={this.state.rows}
        />
        <Footer />
      </React.Fragment>
    )
  }
}
