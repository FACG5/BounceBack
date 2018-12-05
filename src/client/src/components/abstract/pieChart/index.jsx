/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import uuid from 'uuid';
import { makePie, colors } from './logic';
import './index.css';

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
    const {
      sections, id, width, title,
    } = this.props;
    return (
      <div className="pie">
        <svg className={`bar-chart-${id} bar-chart`} ref={this.chartTag} style={{ width }} />
        <h4>{title}</h4>
        <div className="platforms">
          {sections.map((section, index) => (
            <div className="chart-title" key={uuid()}>
              <span
                className="decr-square"
                style={{
                  background: colors[index],
                  width: '12px',
                  height: '12px',
                  marginRight: '15px',
                }}
              />
              {section.decription}

            </div>
          ))}
        </div>
      </div>
    );
  }
}
