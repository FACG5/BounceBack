import React, { Component } from 'react';
import Header from '../../../abstract/header';
import Footer from '../../../abstract/footer'

export default class Date extends Component {
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
        <Header value='View Courses' />
        <Footer />
      </React.Fragment>
    )
  }
}
