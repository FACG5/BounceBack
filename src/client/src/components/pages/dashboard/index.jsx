import React, { Component } from "react";
import Statistics from "../../abstract/statistics";
import { Link } from "react-router-dom";
import Header from "../../abstract/header";
import Footer from "../../abstract/footer";
import PieChart from "../../abstract/pieChart";
import axios from "axios";
import "./style.css";
import contextHoc from "./../../abstract/HOC/contextHoc";

class index extends Component {
  state = {
    participant: "",
    course: "",
    worker: "",
    sections: []
  };

  componentWillMount() {
    this.props.history.push("/");
  }

  componentDidMount = async () => {
    const { dispatch } = this.props.context;
    try {

      // axios to get the data;
      const { 
        countParticipant: { count :countParticipant },
        countCourse: { count: countCourse } ,
        countWorker: { count: countWorker },
        countEmployedParticipant: { count: countEmployedParticipant },
        countNotEmployedParticipant: { count: countNotEmployedParticipant }
       } =  (await axios("/api/v2/overview")).data;

      // average for emloyed participant
      const employedAvg = (countEmployedParticipant*100/countParticipant).toFixed(2);
      // average for not emloyed participant
      const notEmployedAvg = (countNotEmployedParticipant*100/countParticipant).toFixed(2);     
      this.setState({
        participant: countParticipant,
        course: countCourse,
        worker: countWorker,
        sections: [
          { title: 'Employed', percentage: employedAvg},
          { title: 'Un_employed', percentage: notEmployedAvg}
          ]
      });
    } catch (err) {
      dispatch({
        type: "ERROR_PAGE",
        payload: { ErrorPage: err.response.status }
      });
    }
  };
  
  render() {
    const { participant, course, worker, sections } = this.state;
    return (
      <>
        <Header value="Dashboard" />
        <div className="cards">
          <Link className="static-count" to="/participants/view">
            <Statistics number={participant} value="Participant" />
          </Link>
          <Link className="static-count" to="/courses/view">
            <Statistics number={course} value="Courses" />
          </Link>
          <Link className="static-count" to="/workers/view">
            <Statistics number={worker} value="Worker" />
          </Link>
        </div>
        {
          sections[0] && 
          <PieChart sections= {sections} /> 
        }
        <h3 className="welcome">welcome in the bounceback dashboard</h3>
        <p className="welcome-p">you can manage any thing that you want</p>
        <Footer />
      </>
    );
  }
}

export default contextHoc(index);
