import React, { Component } from 'react';
import Header from '../../abstract/header';
import Table from '../../abstract/Table';
import Footer from '../../abstract/footer'
import Button from '../../abstract/button'

export default class Courses extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
        value='Courses'
        />
        <Header
        value='Courses List :'
        align='left'
        margin = '0'
        />
        <Table 
        rows={[['Course Name', 'Course Id', 'start', 'end', 'Action'], ['Painting', '4', '04/05/2017', '04/05/2017', <React.Fragment><i className="fas fa-trash-alt"></i><i className="fas fa-info-circle"></i></React.Fragment>], ['Painting', '4', '04/05/2017', '04/05/2017', <React.Fragment><i className="fas fa-trash-alt"></i><i className="fas fa-info-circle"></i></React.Fragment>], ['Painting', '4', '04/05/2017', '04/05/2017', <React.Fragment><i className="fas fa-trash-alt"></i><i className="fas fa-info-circle"></i></React.Fragment>], ['Painting', '4', '04/05/2017', '04/05/2017', <React.Fragment><i className="fas fa-trash-alt"></i><i className="fas fa-info-circle"></i></React.Fragment>]]}
        />
        <Button 
        value='Edit & save'
        />
        <Button 
        value='Back'
        color='red'
        />
        <Button 
        value='Add Course'
        />
        <Footer />
      </React.Fragment>
    )
  }
}
