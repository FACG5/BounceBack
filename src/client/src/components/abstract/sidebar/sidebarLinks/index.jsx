import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./../../../context";
import removeCookies from "./removeCookies";
import "./style.css";
import swal from 'sweetalert2';

class SideLinks extends Component {
  logout = dispatch => {
    removeCookies();
    localStorage.clear();
    dispatch({ type: "LOGIN_USER", payload: { logging: false } });
    swal({
      title: "Success",
      type: "success",
      html:
        " <strong>Logged out</strong> <br/>",
      showConfirmButton: false,
      timer: 2000
    });
  };
  render() {
    return (
      <Consumer>
        {value => (
          <React.Fragment>
            <Link className="links" to="/report">
              report
            </Link>
            <p className="links" onClick={() => this.logout(value.dispatch)}>
              logout
            </p>
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default SideLinks;
