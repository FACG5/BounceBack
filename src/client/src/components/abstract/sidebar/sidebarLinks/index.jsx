/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import { Consumer } from '../../../context';
import removeCookies from './removeCookies';
import './style.css';


class SideLinks extends Component {
  logout = (dispatch) => {
    removeCookies();
    localStorage.clear();
    dispatch({ type: 'LOGIN_USER', payload: { logging: false } });
    swal({
      title: 'Success',
      type: 'success',
      html:
        ' <strong>Logged out</strong> <br/>',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  render() {
    return (
      <Consumer>
        {value => (
          <>
            <Link className="links" to="/report">
              report
            </Link>
            <p className="links" onClick={() => this.logout(value.dispatch)}>
              logout
            </p>
          </>
        )}
      </Consumer>
    );
  }
}

export default SideLinks;
