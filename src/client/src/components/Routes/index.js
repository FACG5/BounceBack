import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Sidebar from "./../../components/abstract/sidebar";
import Container from "../../components/abstract/layout/Container";
import ViewParticipants from "../../components/pages/participants/viewParticipants";
import viewCourses from "../../components/pages/courses/viewCourses";
import viewManagers from "../../components/pages/managers/viewManagers";
import addManager from "../../components/pages/managers/addManager";
import participantDate from "../../components/pages/participants/participantDates";
import participantCourse from "./../pages/participants/participantCourses";
import Dashboard from "../../components/pages/dashboard";
import AddParticipant from "../../components/pages/participants/addParticipant";
import ViewWorker from "../../components/pages/workers/viewWorkers";
import addCourse from "../../components/pages/courses/addCourses";
import ReportResult from "./../pages/reportResult";
import Report from "./../pages/report";
import prisonDetails from "./../pages/participants/prisonDetails";
import addWorker from "./../pages/workers/addWorkers";
import workerDetails from "../../components/pages/workers/workerDetails";
import courseDetails from "../../components/pages/courses/courseDetails";
import pastoral from "../../components/pages/courses/pastoral";
import managerDetails from "../../components/pages/managers/managerDetails";
import ParticipantCourseDetails from "../../components/pages/participants/participantCourseDetails";
import ParticipantCourseAdd from "../../components/pages/participants/addParticipantCourse";
import AddParticipantDate from "../../components/pages/participants/addParticipantDate";
import ParticipantDateDetails from "../../components/pages/participants/participantDateDetails";
import participantDetails from "./../pages/participants/participantDetails";

export default function index() {
  return (
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
            path="/participant/:id/dates"
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
            path="/worker/details/:id"
            component={workerDetails}
          />
          <Route
            exact
            path="/trainings/details/:id"
            component={courseDetails}
          />
          <Route
            exact
            path="/pastoral/details/:id"
            component={pastoral}
          />
          <Route
            exact
            path="/manager/details/:id"
            component={managerDetails}
          />
          <Route
            exact
            path="/participants/:id/prison"
            component={prisonDetails}
          />
          <Route
            exact
            path="/participant/:id/course/details/:course_id"
            component={ParticipantCourseDetails}
          />
          <Route
            exact
            path="/participants/:id/course/add"
            component={ParticipantCourseAdd}
          />
          <Route
            exact
            path="/participants/:id/date/add"
            component={AddParticipantDate}
          />
          <Route
            exact
            path="/participant/:id/date/details/:date_id"
            component={ParticipantDateDetails}
          />
          <Route
            exactLogout
            path="/participant/details/:id"
            component={participantDetails}
          />
          <Route
            exact
            path="/participant/:id/courses"
            component={participantCourse}
          />
          <Route component={Dashboard} />
        </Switch>
      </Container>
    </div>
  )
}
