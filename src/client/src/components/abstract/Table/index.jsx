import React, { Component } from "react";
import Container from "../layout/Container";
import uuid from 'uuid';
import "./style.css";

export default class Table extends Component {
  render() {
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
