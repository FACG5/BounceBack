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

class index extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goBack = event => {
    this.props.history.push('/managers/view')
  };

  getData = async () => {
    const { dispatch } = this.props.context;
    const id = this.props.match.params.id;
    axios(`/api/v2/manager/${id}`).then(result => {
      
      const { data } = result;
      const date = data.date_of_birth.split("T")[0];
      this.setState({...data, date_of_birth:date});

    }).catch(error => {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: error.response.status } })
    }) 
  
};

updateManager = async obj => {
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
    const result = await axios(`/api/v2/manager/${id}`, {
      method: "PUT",
      data: {
        managerData: obj
      }
    });
    if (result.data.error) {
      await swal({
        title: "",
        type: "warning",
        html: result.data.error,
        confirmButtonText: "Ok"
      });
      this.props.history.push("/managers/view");
    } else {
      await swal({
        title: "Success",
        type: "success",
        html: result.data.message
      });
      this.setState({ ...obj });
      this.props.history.push("/managers/view");
    }
  }
};

  componentDidMount = () => {
    this.getData();
  }

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    this.updateManager(fields);
  };

  render() {
    return (
      <div>
        <Form
          title="Manager Details"
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
