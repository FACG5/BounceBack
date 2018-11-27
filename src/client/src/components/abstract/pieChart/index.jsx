import React, { Component } from "react";
import { makePie, colors } from "./logic";
import uuid from 'uuid';
import "./index.css";

export default class index extends Component {

  constructor(props) {
    super(props);
    this.chartTag = React.createRef();
  }

  componentDidMount = () => {
    const { sections, width } = this.props;
    makePie(sections, this.chartTag.current, width);
  };

  render() {
    const { sections, id, width } = this.props;
    return (
      <div className="pie">
        <svg className={`bar-chart-${id} bar-chart`} ref={this.chartTag} style={{ width: width }} />
        <div className="platforms">
          {sections.map((section, index) =>
            <div className="chart-title" key={uuid()}>
              <span className="decr-square"
                style={{
                  background: colors[index],
                }}
              />{section.decription}</div>)}
        </div>
      </div>
    );
  }
}