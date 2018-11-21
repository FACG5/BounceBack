import React, { Component } from "react";
import Input from "../../abstract/input";
import Button from "../../abstract/button";
import contextHoc from "./../../abstract/HOC/contextHoc";
import "./style.css";
import axios from "axios";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  componentWillMount = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.logging) {
      this.props.history.push("/login");
    }
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onClick = async () => {
    const { dispatch } = this.props.context;
    const { username, password } = this.state;
    const response = await axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: { username, password },
      url: "/api/v2/login"
    });
    if (response.data.username) {
      const user = { logging: true };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN_USER", payload: { logging: true } });
      this.props.history.push("/");
    } else {
      this.setState({ error: response.data.Error });
    }
  };

  render() {
    const { username, password, error } = this.state;
    return (
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
          <Button value="Login" color="#ff4800" onClick={this.onClick} />
          <span>{error}</span>
        </div>
      </div>
    );
  }
}
export default contextHoc(LoginForm);
