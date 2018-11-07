import React, { Component } from "react";
import Sidebar from "../components/abstract/sidebar";
import Container from "../components/abstract/layout/Container";
import ViewParticipants from "../components/pages/viewParticipants";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    login: true
  };
  render() {
    return (
      <Router>
        <div className="App">
          {!this.state.login ? (
            <h1>login page</h1> // Login Page
            ) : (
            <React.Fragment>
              <Sidebar />
              <Container>
                <Switch>
                  <Route exact path="/participants/view" component={ViewParticipants}/>  
                </Switch>
              </Container>
            </React.Fragment>
          ) }
        </div>
      </Router>
    );
  }
}

export default App;
