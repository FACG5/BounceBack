import React, { Component } from "react";
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
            {rows.map(row => (
              <div>
                {row.map(value => (
                  <span>{value}</span>
                ))}
              </div>
            ))}
          </div>
      </div>
    );
  }
}
