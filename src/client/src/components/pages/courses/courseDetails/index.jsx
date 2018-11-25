import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import axios from "axios";
import contextHoc from './../../../abstract/HOC/contextHoc';
import swal from 'sweetalert2';
import Loading from '../../loading';
import PieChart from "../../../abstract/pieChart";

class index extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  updateCourse = async obj => {
    const confirm = await swal({
      type: "warning",
      html: "Are you sure that you want to update this data ?",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: "Thumbs up",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: "Thumbs down"
    });
    if (confirm.value) {
      const { id } = this.props.match.params;
      const result = await axios(`/api/v2/course/${id}`, {
        method: "PUT",
        data: {
          courseData: obj
        }
      });
      if (result.data.error) {
        await swal({
          title: "",
          type: "warning",
          html: result.data.error,
          confirmButtonText: "Ok"
        });
        this.props.history.push("/courses/view");
      } else {
        await swal({
          title: "Success",
          type: "success",
          html: result.data.message
        });
        this.setState({ ...obj });
        this.props.history.push("/courses/view");
      }
    }
  };

  getDetails = async () => {
    const { dispatch } = this.props.context;
    const id = this.props.match.params.id;
    axios(`/api/v2/course/${id}`).then(result => {
      const { data } = result;
      const startDate = data.course_start.split("T")[0];
      const endDate = data.course_end.split("T")[0];
      this.setState({ ...data, course_start:startDate, course_end:endDate, loading: false });
    }).catch(error => {
      console.log(error)
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: error.response.status } })
    });
  };

  getChart = async () => {
    const { dispatch } = this.props.context;
    const id = this.props.match.params.id;
    try{
    const {
      total: { count: total },
      countDropped: { count: countDropped },
      countStarted: { count: countStarted },
      countReset: { count: countReset },
      countNot: { count: countNot },
      countPassed: { count: countPassed },
      countFailed: { count: countFailed },
    } = (await axios(`/api/v2/enrollment/${id}`)).data;

    const avg = (count, countAll) =>{
      return ((count * 100) / countAll).toFixed(2);
    }
    const passedAvg = avg(countPassed, total);
    const failedAvg = avg(countFailed, total);
    const droppedAvg = avg(countDropped, total);
    const resetAvg = avg(countReset, total);
    const startedAvg = avg(countStarted, total);
    const notStartedAvg = avg(countNot, total);

    this.setState({ enrollment_status: [{ title: 'Passed', percentage: passedAvg },
    { title: 'Failed', percentage: failedAvg },
    { title: 'Dropped', percentage: droppedAvg },
    { title: 'Reset', percentage: resetAvg },
    { title: 'Started', percentage: startedAvg },
    { title: 'Not Started', percentage: notStartedAvg }
  ]});
  }
  catch (error) {
    dispatch({
      type: "ERROR_PAGE",
      payload: { ErrorPage: error.response.status }
    });
  }
};

  componentWillMount = () => {
    this.getDetails();
  }

  componentDidMount = () => {
    this.getChart();
  }

  goBack = event => {
    this.props.history.push('/courses/view')
  };

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    this.updateCourse(fields);
  };

  render() {
    const {
      loading, enrollment_status
    } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        {enrollment_status[0] && <PieChart sections={enrollment_status} />}
        <Form
          title="Course Details"
          fields={fieldSet}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.onSubmit, this.goBack]}
        />
        <Footer />
      </div>
    );
  }
}
export default contextHoc(index);
