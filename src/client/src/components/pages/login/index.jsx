import React, { Component } from "react";
import Input from "../../abstract/input";
import Button from "../../abstract/button";
import { Consumer } from "./../../context";
import "./style.css";
import axios from "axios";

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  onClick = async dispatch => {
    const { username, password } = this.state;
    const response = await axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: { username, password },
      url: "/login"
    });
    if (response.data.username) {
      dispatch({ type: "LOGIN_USER", payload: { logging: true } });
      this.props.history.push("/");
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <Consumer>
        {value => (
          <div className="login-page">
            <img
              className="login-logo"
              src="https://files.gitter.im/MAK-asdadsada/Lobby/5kcm/Logo.png"
              alt="logo"
            />
            <div className="login-form">
              <h1 className="login-title">manager login</h1>
              <div className="inputs">
                <Input
                  label="Username"
                  name="username"
                  value={username}
                  onChange={this.onChange}
                  type="text"
                  placeholder="username"
                  width="20rem"
                />
                <Input
                  label="Password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                  width="20rem"
                />
              </div>
              <Button
                value="Login"
                color="#ff4800"
                onClick={() => this.onClick(value.dispatch)}
              />
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}
