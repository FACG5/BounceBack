import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './style.css';

class SideLinks extends Component{
    render() {
      return(
            <React.Fragment>
                <Link className="links" to="/report">report</Link>
                <Link className="links" to="/login">logout</Link>
            </React.Fragment>
      )
    }
  }
  
  export default SideLinks;
  