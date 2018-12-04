import React from 'react'
import { Route, Switch } from 'react-router-dom';
import allComponenets from './allComponents';
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
            path="/participants/:id/prisoner/:prisonerId"
            component={prisonerDetails}
          />
          <Route
            exact
            path="/participant/:id/course/details/:course_id"
            component={ParticipantCourseDetails}
          />
          <Route
            exact
            path="/participant/:id/pastoral/details/:course_id"
            component={ParticipantPastoralDetails}
          />
          <Route
            exact
            path="/participants/:id/course/add"
            component={ParticipantCourseAdd}
          />
          <Route
            exact
            path="/participants/:id/pastoral/add"
            component={ParticipantPastoralAdd}
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
const {
  Sidebar,
  Container,
  ViewParticipants,
  viewCourses,
  viewManagers,
  addManager,
  participantDate,
  participantCourse,
  Dashboard,
  AddParticipant,
  ViewWorker,
  addCourse,
  ReportResult,
  Report,
  prisonDetails,
  addWorker,
  workerDetails,
  courseDetails,
  pastoral,
  managerDetails,
  ParticipantCourseDetails,
  ParticipantPastoralDetails,
  ParticipantCourseAdd,
  ParticipantPastoralAdd,
  AddParticipantDate,
  ParticipantDateDetails,
  participantDetails,
  prisonerDetails

} = allComponenets