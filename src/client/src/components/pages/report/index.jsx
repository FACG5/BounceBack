import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../abstract/header'
import Button from '../../abstract/button'
import Footer from '../../abstract/footer'
import Input from '../../abstract/input'
import DropDown from '../../abstract/dropdown'
import './style.css'

export default class index extends Component {
  state= {
    name:""
  }
  onChange = (event) => {
      const {value,name} = event.target;
      this.setState({[name]:value})
  }
  render() {
    return (
      <React.Fragment>
        <section className="section-view">
          <Header value="Report" />
          <div className="period-section">
            <p>Select the period to get the report</p>
            <div className="selected-period">
              <Input label="From"
                    name="from"
                    value={this.state.value}
                    onChange={this.onChange}
                    type="date"
                    placeholder="from"
                    width="20rem" />
              <Input label="To"
                    name="to"
                    value={this.state.value}
                    onChange={this.onChange}
                    type="date"
                    placeholder="to"
                    width="20rem" />
            </div>
          </div>
          <div className="criteria-section">
            <p>Check the criteria that you want :</p>
            <input type="checkbox" checked name="bounceback" value="bounceback"/> Bounceback <br />
            <input type="checkbox" name="project I.e." value="project I.e."/> Project I.e. <br />
            <input type="checkbox" name="ofg" value="ofg"/> OFG <br />
            <input type="checkbox" name="mtg" value="mtg"/> MTG <br />
            <input type="checkbox" checked name="active" value="active"/>Active <br />
            <input type="checkbox" name="inactive" value="inactive"/>In Active <br />
          </div>
          <div className="worker-section">
            <div className="selected-worker">
              <p>Choose the case worker if you want a specific one:</p>
              <DropDown label=""
                        name="filter"
                        options={["all", "worker1", "worker2", "worker3", "worker4"]}
                        width="250px"
                        value={this.state.filter}
                        onChange={this.onChange} />
            </div>
          </div>
          <Link to="/report/result"><Button value="View Report"
                  color="#ff4800"
                  onClick={this.onClick} />  </Link>
          <Footer />
        </section>
      </React.Fragment>
    )
  }
}
