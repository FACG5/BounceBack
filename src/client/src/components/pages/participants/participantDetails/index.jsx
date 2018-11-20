import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
  validationForm
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import axios from "axios";
import contextHoc from './../../../abstract/HOC/contextHoc';

class index extends Component {
  state = initialState;
  
  goBack = event => {
    this.props.history.push("/participants/view");
  };

  goDates = event => {
    const id = this.props.match.params.id;
    this.props.history.push(`/participant/${id}/dates`);
  };

  goTrainings = event => {
    const id = this.props.match.params.id;
    this.props.history.push(`/participant/${id}/courses`);
  };

  getDetails = async () => {
    const id = this.props.match.params.id;
    const { dispatch } = this.props.context;
    axios(`/api/v2/participant/${id}`).then(result => {
      const { data } = result;
      const date = data.date_of_birth.split("T")[0];
      this.setState({ ...data, date_of_birth: date });
    }).catch(error => {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: error.response.status } })
    })

  };

  componentDidMount = () => {
    this.getDetails();
  }

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });

    for (const key in fields) {
      fields[key] = "";
    }
    this.setState(fields);
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {

    return (
      <>
        <Form
          title="Participant Details"
          fields={fieldSet}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.onSubmit, this.goBack, this.goDates, this.goTrainings]}
        />
        <Footer />
      </>
    );
  }
}

export default contextHoc(index);
