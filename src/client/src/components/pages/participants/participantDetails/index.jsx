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
    this.props.history.push("/participants/view");
  };
  
  getDetails = async () => {
     // eslint-disable-next-line no-unused-vars
      const { surName } = this.state;
      const id = this.props.match.params.id;
      const data = await axios(`participant/${id}`);
      console.log(data);
      const details = data.data;
      const { surename } = details;
      this.setState({ surName: surename});
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

  render() {

    return (
      <div className="detail-participant">
        <Form
          title="Participant Details"
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
