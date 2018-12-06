/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class SideTitles extends Component {
  state = {
    toggleParticipant: false,
    toggleCourse: false,
    toggleManager: false,
    toggleWorker: false,
  }

  onClick = (e) => {
    const {
      toggleParticipant, toggleCourse, toggleManager, toggleWorker,
    } = this.state;
    const itemId = e.target.id;
    if (itemId === 'participants') {
      this.setState({ toggleParticipant: !toggleParticipant });
    } else if (itemId === 'courses') {
      this.setState({ toggleCourse: !toggleCourse });
    } else if (itemId === 'managers') {
      this.setState({ toggleManager: !toggleManager });
    } else if (itemId === 'workers') {
      this.setState({ toggleWorker: !toggleWorker });
    } else {
      this.setState({
        toggleWorker: false,
        toggleParticipant: false,
        toggleManager: false,
        toggleCourse: false,
      });
    }
  }

  render() {
    const {
      toggleParticipant, toggleCourse, toggleManager, toggleWorker,
    } = this.state;
    return (
      <>
        <div className="sidemenu">
          <div className="menu">
            <li className="item">
              <Link className="btn" onClick={this.onClick} id="participants" to="#">
                <i id="participants" className="icon fa fa-caret-down" />
participants
              </Link>
              {
                toggleParticipant
                && (
                <div className="sub-menu">
                  <Link className="link" to="/participants/view">view participants</Link>
                  <Link className="link" to="/participants/add">add participant</Link>
                </div>
                )

              }
            </li>

            <li className="item">
              <Link className="btn" onClick={this.onClick} id="courses" to="#">
                {' '}
                <i id="courses" className="icon fa fa-caret-down" />
interventions
              </Link>
              {
                toggleCourse
                && (
                <div className="sub-menu">
                  <Link className="link" to="/courses/view">view intervention</Link>
                  <Link className="link" to="/courses/add">add intervention</Link>
                </div>
                )
              }
            </li>

            <li className="item">
              <Link className="btn" onClick={this.onClick} id="managers" to="#">
                {' '}
                <i id="managers" className="icon fa fa-caret-down" />
                {' '}
managers
              </Link>
              {
                toggleManager
                && (
                <div className="sub-menu">
                  <Link className="link" to="/managers/view">view managers</Link>
                  <Link className="link" to="/managers/add">add manager</Link>
                </div>
                )
              }
            </li>

            <li className="item">
              <Link className="btn" onClick={this.onClick} id="workers" to="#">
                {' '}
                <i id="workers" className="icon fa fa-caret-down" />
staff
              </Link>
              {
                toggleWorker
                && (<div className="sub-menu">
                  <Link className="link" to="/workers/view">view staff</Link>
                  <Link className="link" to="/workers/add">add worker</Link>
                  </div>
                )
              }
            </li>
          </div>
        </div>
      </>
    );
  }
}

export default SideTitles;
