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

class index extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goBack = event => {
    this.props.history.push('/workers/view')
  };

  updateWorker = async obj => {
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
      const result = await axios(`/api/v2/worker/${id}`, {
        method: "PUT",
        data: {
          workerData: obj
        }
      });
      if (result.data.error) {
        await swal({
          title: "",
          type: "warning",
          html: result.data.error,
          confirmButtonText: "Ok"
        });
        this.props.history.push("/workers/view");
      } else {
        await swal({
          title: "Success",
          type: "success",
          html: result.data.message
        });
        this.setState({ ...obj });
        this.props.history.push("/workers/view");
      }
    }
  };

  getDetails = async () => {
    const { dispatch } = this.props.context;
    const id = this.props.match.params.id;
    axios(`/api/v2/worker/${id}`).then(result => {
      const { data } = result;
      const date = data.date_of_birth.split("T")[0];
      this.setState({...data, date_of_birth:date, loading: false});

    }).catch(error => {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: error.response.status } })
    })
};

  componentWillMount = () => {
  this.getDetails();
}

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    this.updateWorker(fields);
  };

  render() {
    const {
      loading
    } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <Form
          title="Worker Details"
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
