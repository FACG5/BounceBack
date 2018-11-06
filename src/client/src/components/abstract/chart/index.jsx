import React, { Component } from 'react';
import './style.css'

export default class Chart extends Component{
    render(){
        const { data } = this.props;
        if (!data) {
            return (
                <div className="chart-error">There is no data chart</div>
            );
          }
    return (
        <div className="chart-view">
            {data.map(value => (
              <div>
              <span>{value}</span>
              </div>
            ))}
        </div>
    );
}
}