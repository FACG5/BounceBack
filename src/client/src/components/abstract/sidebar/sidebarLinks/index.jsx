import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./../../../context";
import "./style.css";

class SideLinks extends Component {
  logout = dispatch => {
    dispatch({ type: "LOGIN_USER", payload: { logging: false } });
  };
  render() {
    return (
      <Consumer>
        {value => (
          <React.Fragment>
            <Link className="links" to="/report">
              report
            </Link>
            <span className="links" onClick={() => this.logout(value.dispatch)}>
              logout
            </span>
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default SideLinks;
