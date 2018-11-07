import React, { Component } from 'react'
import Statistics from '../../abstract/statistics'
import { Link } from 'react-router-dom';
import Header from "../../abstract/header";
import Footer from "../../abstract/footer";
import './style.css';

export default class index extends Component {
  state={
     participant:"100",
     course:"7",
     worker:"1" 
  }
  render() {
    return (
      <React.Fragment>
        <Header value="Dashbourd" />
        <div className="cards">
          <Link className="static-count" to="/participants/view">
          <Statistics
            number={this.state.participant}
            value="Participant"/>
          </Link>
          <Link className="static-count" to="/courses/view">
          <Statistics
            number={this.state.course}
            value="Courses"/>
          </Link>
          <Link className="static-count" to="/workers/view">
          <Statistics
            number={this.state.worker}
            value="Worker"/>
          </Link>
        </div>
        <h3 className="welcome">welcome in the bounceback dashboard</h3>
        <p className="welcome-p">you can manage any thing that you want</p>
        <Footer />
      </React.Fragment>
    )
  }
}
