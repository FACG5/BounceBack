/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import propTypes from 'prop-types';

const Context = React.createContext({ logging: false });

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN_USER':
      return { ...state, ...payload };
    case 'ERROR_PAGE':
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export class Provider extends Component {
  state = {
    logging: false,
    dispatch: action => this.setState(reducer(this.state, action)),
    ErrorPage: null,
  };

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}

export const { Consumer } = Context;

Provider.propTypes = {
  children: propTypes.isRequired,
};
