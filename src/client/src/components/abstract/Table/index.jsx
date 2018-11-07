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
        <div className="table">
          {rows.map((row, index) => (
            <div key={index}>
              {row.map((value, index) => (
                <span key={index}>{value}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
