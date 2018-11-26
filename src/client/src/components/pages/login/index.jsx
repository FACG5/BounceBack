import React, { Component } from "react";
import Input from "../../abstract/input";
import Button from "../../abstract/button";
import contextHoc from "./../../abstract/HOC/contextHoc";
import "./style.css";
import axios from "axios";
import swal from 'sweetalert2';
import { checkUser } from './../../../helpers';


class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  componentDidMount = () => {
    const user = checkUser();
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
    if (response.data) {
      localStorage.setItem("token", JSON.stringify(response.data));
      dispatch({ type: "LOGIN_USER", payload: { logging: true } });
      swal({
        title: "Success",
        type: "success",
        html:
          " <strong>Logged in</strong> <br/>",
        showConfirmButton: false,
        timer: 2000
      });
      this.props.history.push("/");
    } else {
      this.setState({ error: response.data.Error });
    }
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <div className="login-page">
        <div className="login-form">
          <img
            className="login-logo"
            src="https://files.gitter.im/MAK-asdadsada/Lobby/5kcm/Logo.png"
            alt="logo"
          />
          <div className="inputs">
            <Input
              label="Username"
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="username"
              width="83%"
            />
            <Input
              label="Password"
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              width="83%"
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
