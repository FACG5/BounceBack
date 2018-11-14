
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
    console.log(itemId)
    if (itemId === "participants"){
      this.setState({toggleParticipant: !this.state.toggleParticipant})
    } else if (itemId === "courses"){
      this.setState({toggleCourse: !this.state.toggleCourse})
    }else if (itemId === "managers"){
      this.setState({toggleManager: !this.state.toggleManager})
    }
    else if (itemId === "workers"){
      this.setState({toggleWorker: !this.state.toggleWorker})
    }
    else{
      this.setState({toggleWorker: false,
                    toggleParticipant:false,
                    toggleManager:false,
                    toggleCourse:false,
                  })
    }
  }
  render() {
    const { toggleParticipant, toggleCourse, toggleManager, toggleWorker } = this.state;
    return (
      <React.Fragment>
        <div className="sidemenu">
          <div className="menu">
            <li className="item" id="participants">
              <Link className="btn" onClick={this.onClick} id="participants" to="#participants"><i className="icon fa fa-caret-down"></i>participants</Link>
              {
                toggleParticipant &&
                (<div className="smenu">
                  <Link className="link" to="/participants/view">view participants</Link>
                  <Link className="link" to="/participants/add">add participant</Link>
                </div>)

              }
            </li>

            <li className="item" id="courses">
              <Link className="btn" onClick={this.onClick} id="courses" to="#courses"> <i className="icon fa fa-caret-down"></i>courses</Link>
              {
                toggleCourse &&
                (<div className="smenu">
                  <Link className="link" to="/courses/view">view courses</Link>
                  <Link className="link" to="/courses/add">add course</Link>
                </div>)
              }
            </li>

            <li className="item" id="managers">
              <Link className="btn" onClick={this.onClick} id="managers" to="#managers"> <i className="icon fa fa-caret-down"></i> managers</Link>
              {
                toggleManager &&
                (<div className="smenu">
                  <Link className="link" to="/managers/view">view managers</Link>
                  <Link className="link" to="/managers/add">add manager</Link>
                </div>)
              }
            </li>

            <li className="item" id="workers">
              <Link className="btn" onClick={this.onClick} id="workers" to="#workers">  <i className="icon fa fa-caret-down"></i>workers</Link>                
              {
                toggleWorker &&
                (<div className="smenu">
                  <Link className="link" to="/workers/view">view workers</Link>
                  <Link className="link" to="/workers/add">add worker</Link>
                </div>
                )
              }
            </li>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SideTitles;
