import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './style.css';

class SideHeader extends Component{
    render() {
      return(
          <div className="side-header">
            <Link to="/">
              <img className="logo" src="http://www8.0zz0.com/2018/11/07/05/580748308.png" alt="logo"/>
            </Link>
          </div>
      )
    }
  }
  
  export default SideHeader;
  