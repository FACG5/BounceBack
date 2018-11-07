import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {BrowserRouter as  Router} from 'react-router-dom';
import './style.css';

class SideLinks extends Component{
    render() {
      return(
            <React.Fragment>
              <Router>
                <Link className="links" to="/report">report</Link>
              </Router>
              <Router>
                <Link className="links" to="/login">logout</Link>
              </Router>
            </React.Fragment>
      )
    }
  }
  
  export default SideLinks;
  