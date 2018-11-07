import React, { Component } from 'react';
import Input from '../../abstract/input'
import Button from '../../abstract/button'
import './style.css';

export default class LoginForm extends Component {
    state= {
        name:""
    }
    onChange = (event) => {
        const {value,name} = event.target;
        this.setState({[name]:value})
    }
  render() {
    return (
        <div className="login-page">
            <img className="login-logo" src="https://files.gitter.im/MAK-asdadsada/Lobby/5kcm/Logo.png" alt="logo"/>
            <div className='login-form'>
            <h1 className="login-title">manager login</h1>
               <div className="inputs">
               <Input label="Username"
                        name="username"
                        value={this.state.value}
                        onChange={this.onChange}
                        type="text"
                        placeholder="username"
                        width="20rem" />
                 <Input label="Password"
                        name="password"
                        value={this.state.value}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                        width="20rem" />
               </div>
                        <Button value="Login"
                                 color="#ff4800"
                                 onClick={this.onClick}/>  
            </div>
        </div>
    )
  }
}
