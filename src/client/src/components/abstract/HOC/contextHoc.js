import React, { Component } from "react";
import { Consumer } from "./../../context/index";

export default function contextHoc(WrappedComponent) {
  return class contextHoc extends Component {
    render() {
      return (
        <Consumer>
          {value => <WrappedComponent context={value} {...this.props} />}
        </Consumer>
      );
    }
  };
}
