import React, { Component } from 'react';
import Header from '../../abstract/header';
import Input from '../../abstract/input';
import Table from '../../abstract/Table';
import Footer from '../../abstract/footer'

export default class ViewManagers extends Component {
    state = {
        search: ""
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
