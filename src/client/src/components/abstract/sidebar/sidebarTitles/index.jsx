
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {BrowserRouter as  Router} from 'react-router-dom';
import './style.css';

class SideTitles extends Component{
  render() {
    console.log(this.props);
      return(
        <React.Fragment>
          <div className="dropdown">
          <button className="drop-btn"> <i className="icon fa fa-caret-down"></i>participant</button>
            <div className="dropdown-content">
                <Link className="link active" to="/participants/view">view participants</Link>
                <Link className="link" to="/participants/add">add participant</Link>
            </div>
          </div>
          <div className="dropdown">
          <button className="drop-btn"> <i className="icon fa fa-caret-down"></i>courses</button>
            <div className="dropdown-content">
                <Link className="link" to={`/courses/view`}>view courses</Link>
                <Link className="link" to="/courses/add">add course</Link>
            </div>
          </div>
          <div className="dropdown">
          <button className="drop-btn"> <i className="icon fa fa-caret-down"></i>managers</button>
            <div className="dropdown-content">
                <Link className="link" to="/managers/view">view managers</Link>
                <Link className="link" to="/managers/add">add manager</Link>
            </div>
          </div>
          <div className="dropdown">
          <button className="drop-btn"> <i className="icon fa fa-caret-down"></i>workers</button>
            <div className="dropdown-content">
                <Link className="link" to="/workers/view">view workers</Link>
                <Link className="link" to="/workers/add">add worker</Link>
            </div>
          </div>
      </React.Fragment>
      )
    }
  }
  
  export default SideTitles;

