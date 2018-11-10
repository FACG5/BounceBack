import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../abstract/header';
import Table from '../../../abstract/Table';
import Footer from '../../../abstract/footer';
import Button from '../../../abstract/button';

export default class Course extends Component {
    state = {
        search: "",
        rows: [
          ["Course name", "Course Id", "Start", "End", "Action"],
          ["Course Title", "9868686", "15/5/2017", "15/12/2017", <React.Fragment><i className="fas fa-trash-alt"></i><Link to="/participants/course/details">
        <i className="fas fa-info-circle"></i></Link></React.Fragment>],
          ["Course Title", "9868686", "15/5/2017", "15/12/2017", <React.Fragment><i className="fas fa-trash-alt"></i><Link to="/participants/course/details">
        <i className="fas fa-info-circle"></i></Link></React.Fragment>],
          ["Course Title", "9868686", "15/5/2017", "15/12/2017", <React.Fragment><i className="fas fa-trash-alt"></i><Link to="/participants/course/details">
        <i className="fas fa-info-circle"></i></Link></React.Fragment>],
          ["Course Title", "9868686", "15/5/2017", "15/12/2017", <React.Fragment><i className="fas fa-trash-alt"></i><Link to="/participants/course/details">
        <i className="fas fa-info-circle"></i></Link></React.Fragment>]
        ]
      };
      onChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };

      goBack = event => {
        this.props.history.push('/participants/course/add')
      };
  render() {
    return (
      <React.Fragment>
        <Header value='View Courses' />
        <Table rows = {this.state.rows} />
        <Button value= 'Edit & save' />
        <Button value= 'Back' color='red' />
        <Button value= 'Add Course' onClick={this.goBack} />
        <Footer />
      </React.Fragment>
    )
  }
}
