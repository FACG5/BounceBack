import React, { Component } from "react";
import Sidebar from "../components/abstract/sidebar";
import Container from "../components/abstract/layout/Container";
import ViewParticipants from "../components/pages/participants/viewParticipants";
import viewCourses from "../components/pages/courses/viewCourses";
import viewManagers from "../components/pages/managers/viewManagers";
import addManager from "../components/pages/managers/addManager";
import participantDate from "../components/pages/participants/participantDates";
import participantCourse from "./pages/participants/participantCourses";
import Dashboard from "../components/pages/dashboard";
import AddParticipant from "../components/pages/participants/addParticipant";
import ViewWorker from "../components/pages/workers/viewWorkers";
import addCourse from "../components/pages/courses/addCourses";
import Login from "./pages/login";
import ReportResult from "./pages/reportResult";
import Report from "./pages/report";
import prisonDetails from "./pages/participants/prisonDetails";
import addWorker from "./pages/workers/addWorkers";
import workerDetails from "../components/pages/workers/workerDetails";
import courseDetails from "../components/pages/courses/courseDetails";
import managerDetails from "../components/pages/managers/managerDetails";
import ParticipantCourseDetails from "../components/pages/participants/participantCourseDetails";
import ParticipantCourseAdd from "../components/pages/participants/addParticipantCourse";
import AddParticipantDate from "../components/pages/participants/addParticipantDate";
import ParticipantDateDetails from "../components/pages/participants/participantDateDetails";
import participantDetails from "./pages/participants/participantDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import contextHoc from "./abstract/HOC/contextHoc";

import "./App.css";

class App extends Component {
  state = {
    login: true
  };
  componentWillMount = () => {
    const { dispatch } = this.props.context;
    const payload = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: "LOGIN_USER", payload });
  };
  render() {
    const { context } = this.props;
    return (
<<<<<<< HEAD
      <Consumer>
        {value => (
          <Router>
            <div className="App">
              {!value.logging ? (
                <Route component={Login} />
              ) : (
                <React.Fragment>
                  <div className="view-app">
                    <Sidebar />
                    <Container>
                      <Switch>
                        <Route
                          exact
                          path="/participants/view"
                          component={ViewParticipants}
                        />
                        <Route
                          exact
                          path="/courses/view"
                          component={viewCourses}
                        />
                        <Route
                          exact
                          path="/managers/view"
                          component={viewManagers}
                        />
                        <Route
                          exact
                          path="/participants/dates"
                          component={participantDate}
                        />
                        <Route exact path="/" component={Dashboard} />
                        <Route
                          exact
                          path="/participants/add"
                          component={AddParticipant}
                        />
                        <Route
                          exact
                          path="/report/result"
                          component={ReportResult}
                        />
                        <Route exact path="/report" component={Report} />
                        <Route
                          exact
                          path="/workers/view"
                          component={ViewWorker}
                        />
                        <Route
                          exact
                          path="/workers/add"
                          component={addWorker}
                        />
                        <Route
                          exact
                          path="/managers/add"
                          component={addManager}
                        />
                        <Route
                          exact
                          path="/courses/add"
                          component={addCourse}
                        />
                        <Route
                          exact
                          path="/worker/details"
                          component={workerDetails}
                        />
                        <Route
                          exact
                          path="/courses/details/:id"
                          component={courseDetails}
                        />
                        <Route
                          exact
                          path="/manager/details/:id"
                          component={managerDetails}
                        />
                        <Route
                          exact
                          path="/participants/prison"
                          component={prisonDetails}
                        />
                        <Route
                          exact
                          path="/participants/course/details"
                          component={ParticipantCourseDetails}
                        />
                        <Route
                          exact
                          path="/participants/course/add"
                          component={ParticipantCourseAdd}
                        />
                        <Route
                          exact
                          path="/participants/date/add"
                          component={AddParticipantDate}
                        />
                        <Route
                          exact
                          path="/participants/date/details"
                          component={ParticipantDateDetails}
                        />
                        <Route
                          exact
                          path="/participant/details/:id"
                          component={participantDetails}
                        />
                        <Route
                          exact
                          path="/participants/courses"
                          component={participantCourse}
                        />
                      </Switch>
                    </Container>
                  </div>
                </React.Fragment>
              )}
            </div>
          </Router>
        )}
      </Consumer>
=======
      <Router>
        <div className="App">
          {!context.logging ? (
            <Route component={Login} />
          ) : (
            <React.Fragment>
              <div className="view-app">
                <Sidebar />
                <Container>
                  <Switch>
                    <Route
                      exact
                      path="/participants/view"
                      component={ViewParticipants}
                    />
                    <Route exact path="/courses/view" component={viewCourses} />
                    <Route
                      exact
                      path="/managers/view"
                      component={viewManagers}
                    />
                    <Route
                      exact
                      path="/participants/dates"
                      component={participantDate}
                    />
                    <Route exact path="/" component={Dashboard} />
                    <Route
                      exact
                      path="/participants/add"
                      component={AddParticipant}
                    />
                    <Route
                      exact
                      path="/report/result"
                      component={ReportResult}
                    />
                    <Route exact path="/report" component={Report} />
                    <Route exact path="/workers/view" component={ViewWorker} />
                    <Route exact path="/workers/add" component={addWorker} />
                    <Route exact path="/managers/add" component={addManager} />
                    <Route exact path="/courses/add" component={addCourse} />
                    <Route
                      exact
                      path="/worker/details"
                      component={workerDetails}
                    />
                    <Route
                      exact
                      path="/courses/details/:id"
                      component={courseDetails}
                    />
                    <Route
                      exact
                      path="/manager/details"
                      component={managerDetails}
                    />
                    <Route
                      exact
                      path="/participants/prison"
                      component={prisonDetails}
                    />
                    <Route
                      exact
                      path="/participants/course/details"
                      component={ParticipantCourseDetails}
                    />
                    <Route
                      exact
                      path="/participants/course/add"
                      component={ParticipantCourseAdd}
                    />
                    <Route
                      exact
                      path="/participants/date/add"
                      component={AddParticipantDate}
                    />
                    <Route
                      exact
                      path="/participants/date/details"
                      component={ParticipantDateDetails}
                    />
                    <Route
                      exact
                      path="/participant/details/:id"
                      component={participantDetails}
                    />
                    <Route
                      exact
                      path="/participants/courses"
                      component={participantCourse}
                    />
                  </Switch>
                </Container>
              </div>
            </React.Fragment>
          )}
        </div>
      </Router>
>>>>>>> 1e5ea4fbd76a932d71a6ec14d6c5a6d51264435c
    );
  }
}

export default contextHoc(App);
