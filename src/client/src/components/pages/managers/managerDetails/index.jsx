import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
  validationForm
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import axios from "axios";

export default class index extends Component {
  state = initialState;

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goBack = event => {
    this.props.history.push('/managers/view')
  };

  getData = async () => {
    const id = this.props.match.params.id;
    const data = await axios(`/api/v2/manager/${id}`);
    const details = data.data.details;
    const date = details.date_of_birth.split("T")[0];
    this.setState({...details, date_of_birth:date});
  };

  componentDidMount = () => {
    this.getData();
  }

  // the implemention waiting  back end api
  onSubmit = event => {
    event.preventDefault();
    const fields = { ...this.state };
    const error = validationForm(fields);
    if (error) return this.setState({ error });

    this.setState(fields);
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
