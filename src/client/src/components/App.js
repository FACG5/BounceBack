import React, { Component } from "react";
import Login from "./pages/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import contextHoc from "./abstract/HOC/contextHoc";
import Error from "./pages/errors/";
import { checkUser } from './../helpers';
import Routes from './Routes';
import "./App.css";

class App extends Component {
  state = {
    login: true
  };

  componentWillMount = () => {
    const { dispatch } = this.props.context;
    const decoded = checkUser();
    if (decoded)
      dispatch({ type: "LOGIN_USER", payload: { logging: decoded.logging } });
  };

  render() {
    const { logging, ErrorPage } = this.props.context;
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


