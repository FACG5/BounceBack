import React, { Component } from "react";
const Context = React.createContext({ logging: false });

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_USER":
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export class Provider extends Component {
  state = {
    logging: false,
    dispatch: action => this.setState(reducer(this.state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
