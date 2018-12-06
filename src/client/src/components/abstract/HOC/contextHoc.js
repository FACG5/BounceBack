/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import propsTypes from 'prop-types';
import { Consumer } from '../../context/index';

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

contextHoc.propsTypes = {
  WrappedComponent: propsTypes.element.isRequired,
};
