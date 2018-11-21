import React, { Component } from "react";
import {
  state as initialState,
  fields as fieldSet,
  validationForm
} from "./staticData";
import Form from "./../../../abstract/Form";
import Footer from '../../../abstract/footer';
import axios from 'axios';

export default class index extends Component {
  state = initialState;

  onChange = async event => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
    // console.log(this.state.workerName);
  };

  cancleAction = event => {
    const { id } = this.props.match.params;
    this.props.history.push(`/participant/${id}/dates`)
  };

  getWorkersNames = async () => {
    const data = await axios("/api/v2/workers");
    const final = data.data.workersData;
    let workersName = fieldSet[0][0].options;
    final.map(value => {
      
      return workersName.push(value.username);
    }
    )
    this.setState({workerName: workersName})
  }

  componentDidMount = () => {
    this.getWorkersNames();
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
      <div>
        <Form
          title="Add Date"
          fields={fieldSet}
          values={this.state}
          onChange={this.onChange}
          btnEvents={[this.onSubmit, this.cancleAction]}
        />
        <Footer />
      </div>
    );
  }
}
