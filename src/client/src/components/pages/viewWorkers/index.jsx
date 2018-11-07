import React, { Component } from 'react';
import Header from '../../abstract/header';
import Table from '../../abstract/Table';
import Input from '../../abstract/input';
import Footer from '../../abstract/footer';

export default class ViewWorkers extends Component {
  state = {
    search: ''
  }
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <React.Fragment>
        <Header value = 'View Worker' />
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
          rows={[
            ["username", "Email", "Details"],
            ["mohannadhanafi", "mohannad@gmail.com", <i className="fas fa-info-circle"></i>],
            ["mohannadhanafi", "mohannad@gmail.com", <i className="fas fa-info-circle"></i>],
            ["mohannadhanafi", "mohannad@gmail.com", <i className="fas fa-info-circle"></i>],
            ["mohannadhanafi", "mohannad@gmail.com", <i className="fas fa-info-circle"></i>],
          ]}
        />
        <Footer />
      </React.Fragment>
    )
  }
}
