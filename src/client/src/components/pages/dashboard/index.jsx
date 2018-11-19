import React, { Component } from 'react'
import Statistics from '../../abstract/statistics'
import { Link } from 'react-router-dom';
import Header from "../../abstract/header";
import Footer from "../../abstract/footer";
import axios from 'axios';
import './style.css';
import contextHoc from './../../abstract/HOC/contextHoc';

class index extends Component {
  state={
     participant: '',
     course: '',
     worker: ''
  }
  componentDidMount = async () => {
    const { dispatch } = this.props.context;
    try {
      const data = await axios('/api/v2/overview');
      const countParticipant = data.data.countParticipant.count;
      const countCourse = data.data.countCourse.count;
      const countWorker = data.data.countWorker.count;
      this.setState({participant: countParticipant, course: countCourse, worker: countWorker})
    } catch (err) {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: err.response.status } })
    }
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

export default contextHoc(index);