import React, { Component } from "react";
import Container from "../layout/Container";
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
        <table>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
              {row.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
