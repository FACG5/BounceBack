/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login';
import contextHoc from './abstract/HOC/contextHoc';
import Error from './pages/errors';
import { checkUser } from '../helpers';
import Routes from './Routes';
import './App.css';

class App extends Component {
  state = {
    login: true,
  };

  componentWillMount = () => {
    const { context: { dispatch } } = this.props;
    const decoded = checkUser();
    if (decoded) { dispatch({ type: 'LOGIN_USER', payload: { logging: decoded.logging } }); }
  };

  render() {
    const { context: { logging, ErrorPage } } = this.props;
    if (ErrorPage) {
      return <Error status={ErrorPage} />;
    }
    return (
      <Router>
        <div className="App">
          {!logging ? (
            <Route component={Login} />
          ) : (
              <>
                <Routes />
              </>
          )}
        </div>
      </Router>
    );
  }
}

export default contextHoc(App);

App.propTypes = {
  context: propTypes.isRequired,
};
