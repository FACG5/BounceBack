import React, { Component } from "react";
import './style.css';
import SideHeader from './sidebarHeader'
import SideTitles from './sidebarTitles'
import SideLinks from './sidebarLinks'

class Sidebar extends Component{
    render() {
      return(
        <div className="side">
            <div className="side-bar">
                  <SideHeader />
                  <SideTitles />
                  <SideLinks />
            </div>
          </div>
      )
    }
  }

  export default Sidebar;
  