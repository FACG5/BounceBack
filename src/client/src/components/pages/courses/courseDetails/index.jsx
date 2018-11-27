import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import Header from '../../../abstract/header';
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
      this.setState({ ...data, course_start: startDate, course_end: endDate, loading: false });
    }).catch(error => {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: error.response.status } })
    });
  };

  getChart = async () => {
    const { dispatch } = this.props.context;
    const id = this.props.match.params.id;
    try {
      const {
        total: { count: total },
        countCompleted: { count: countCompleted },
      } = (await axios(`/api/v2/enrollment/${id}`)).data;
      const countUnCompleted = (total - countCompleted);

      const avg = (count, countAll) => {
        return ((count * 100) / countAll).toFixed(1);
      }
      const completeAvg = avg(countCompleted, total);
      const unCompleteAvg = avg(countUnCompleted, total);

      this.setState({
        enrollment_status: [
          { decription: 'Completed', percentage: completeAvg },
          { decription: 'Uncompleted', percentage: unCompleteAvg }
        ]
      });
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
        <Header value="Training Intervention" />
        <div className="trainig-section">
          <Form
            title="Details"
            fields={fieldSet}
            values={this.state}
            onChange={this.onChange}
            btnEvents={[this.onSubmit, this.goBack]}
          />
          <div className="training-chart">
            <h2 className="title"> Outcomes</h2>
            {enrollment_status[0] && <PieChart sections={enrollment_status} width={300} />}
            <div className="description">
              <p className="desc-one"><span></span> percentage of participants who have successfully completed this training </p>
              <p className="desc-two"><span></span> percentage of participants who have this training </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default contextHoc(index);
