/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import uuid from 'uuid';
import propType from 'prop-types';

import Container from '../layout/Container';
import './style.css';

export default class Table extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { rows } = this.props;
    if (!rows) {
      return (
        <Container>
          <div className="table-error"> No Result</div>
        </Container>
      );
    }

    return (
      <div>
        <table className="view-table">
          <tbody>
            {rows.map(row => (
              <tr key={uuid()}>
                {row.map(value => (
                  <td key={uuid()}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propType = {
  rows: propType.isRequired,
};
