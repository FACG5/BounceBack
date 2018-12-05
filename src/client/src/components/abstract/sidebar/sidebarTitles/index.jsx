
import React, { Component } from "react";
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
    const itemId = e.target.id;
    if (itemId === "participants") {
      this.setState({ toggleParticipant: !this.state.toggleParticipant })
    } else if (itemId === "courses") {
      this.setState({ toggleCourse: !this.state.toggleCourse })
    } else if (itemId === "managers") {
      this.setState({ toggleManager: !this.state.toggleManager })
    }
    else if (itemId === "workers") {
      this.setState({ toggleWorker: !this.state.toggleWorker })
    }
    else {
      this.setState({
        toggleWorker: false,
        toggleParticipant: false,
        toggleManager: false,
        toggleCourse: false,
      })
    }
  }
  render() {
    const { toggleParticipant, toggleCourse, toggleManager, toggleWorker } = this.state;
    return (
      <>
        <div className="sidemenu">
          <div className="menu">
            <li className="item">
              <Link className="btn" onClick={this.onClick} id="participants" to="#"><i id="participants" className="icon fa fa-caret-down"></i>participants</Link>
              {
                toggleParticipant &&
                (<div className="sub-menu">
                  <Link className="link" to="/participants/view">view participants</Link>
                  <Link className="link" to="/participants/add">add participant</Link>
                </div>)

              }
            </li>

            <li className="item">
              <Link className="btn" onClick={this.onClick} id="courses" to="#"> <i id="courses" className="icon fa fa-caret-down"></i>interventions</Link>
              {
                toggleCourse &&
                (<div className="sub-menu">
                  <Link className="link" to="/courses/view">view intervention</Link>
                  <Link className="link" to="/courses/add">add intervention</Link>
                </div>)
              }
            </li>

            <li className="item">
              <Link className="btn" onClick={this.onClick} id="managers" to="#"> <i id="managers" className="icon fa fa-caret-down"></i> managers</Link>
              {
                toggleManager &&
                (<div className="sub-menu">
                  <Link className="link" to="/managers/view">view managers</Link>
                  <Link className="link" to="/managers/add">add manager</Link>
                </div>)
              }
            </li>

            <li className="item">
              <Link className="btn" onClick={this.onClick} id="workers" to="#">  <i id="workers" className="icon fa fa-caret-down"></i>staff</Link>
              {
                toggleWorker &&
                (<div className="sub-menu">
                  <Link className="link" to="/workers/view">view staff</Link>
                  <Link className="link" to="/workers/add">add worker</Link>
                </div>
                )
              }
            </li>
          </div>
        </div>
      </>
    )
  }
}

export default SideTitles;
