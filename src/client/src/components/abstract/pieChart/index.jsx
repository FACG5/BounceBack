import React, { Component } from "react";
import { makePie, colors } from "./logic";
import "./index.css";
export default class index extends Component {
  componentDidMount = () => {
    const { sections } = this.props;
    makePie(sections);
  };
  render() {
    const { sections } = this.props;
    return (
      <div class="pie">
        <svg class="bar-chart" />
        <div class="platforms">
          {sections.map((section, i) => (
            <div class="paltform-titles">
              <div
                style={{
                  background: colors[i],
                  width: "30px",
                  height: "30px"
                }}
              />
              <span>{section.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
