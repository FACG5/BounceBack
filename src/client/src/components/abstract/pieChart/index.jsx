import React, { Component } from "react";
import { makePie, colors } from "./logic";
import "./index.css";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.chartTag = React.createRef();
  }
  componentDidMount = () => {
    const { sections } = this.props;
    makePie(sections, this.chartTag.current);
  };
  render() {
    const { sections, id } = this.props;
    return (
      <div className="pie">
        <svg className={`bar-chart-${id} bar-chart`} ref={this.chartTag} />
        <div className="platforms">
          {sections.map((section, i) => (
            <div className="paltform-titles" key={i}>
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
