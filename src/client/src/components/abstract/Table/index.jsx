import React, { Component } from "react";
import Container from "../layout/Container";
import "./style.css";

export default class Table extends Component {
  render() {
    const { rows } = this.props;
    return (
      <div>
        <Container>
          <div className="table">
            {rows.map(row => (
              <div>
                {row.map(value => (
                  <span>{value}</span>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
