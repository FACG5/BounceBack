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
    this.props.history.push('/workers/view')
  };

  getDetails = async () => {
    const id = this.props.match.params.id;
    axios(`/api/v2/participant/${id}`).then(result => {
      
      const { data } = result;
      const date = data.date_of_birth.split("T")[0];
      this.setState({...data, date_of_birth:date});

    }).catch(error => {
      this.props.history.push("/");
      console.log(error.response)

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

    this.setState(fields);
  };

  render() {
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
