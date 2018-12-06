import React, { Component } from 'react';
import Header from '../../abstract/header';
import Button from '../../abstract/button';
import Footer from '../../abstract/footer';
import './style.css';

export default class index extends Component {
    state = {
      bbno: '0077',
      surname: 'asala',
      forename: 'kamal',
      fullname: 'asala kamal',
      bod: '23/20/1998',
      gender: 'female',
      age: '20',
      address: 'rafah_hay-Alsalam',
      mobile: '0592073727',
      email: 'asala@gmail.com',
    }

    onChange = (event) => {
      const { value, name } = event.target;
      this.setState({ [name]: value });
    }

    render() {
      const {
        bbno, surname, forename, fullname, bod, gender, address, mobile, email, age,
      } = this.state;
      return (
            <>
              <section className="section-view">
                <Header value="Report Result" />
                <div className="top">
                  <p>Report result as your selected criteria is  : </p>
                  <Button
                    value="Export all as pdf/xlsx"
                    color="#ff4800"
                    onClick={this.onClick}
                  />
                </div>
                <table className="case-report">
                  <thead>
                    <tr>
                      <th colSpan="3">
                        <p>
Case No:
                          <span>1</span>
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <td>
                        <p>Action</p>
                      </td>
                      <td className="foot-link" colSpan="3">
                        <span className="link">
Print as pdf/xlsx
                          {' '}
                          <i className="fas fa-file-export" />
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>BB. No :</td>
                      <td>{bbno}</td>
                      <td>surname :</td>
                      <td>{surname}</td>
                    </tr>
                    <tr>
                      <td>forename :</td>
                      <td>{forename}</td>
                      <td>fullname :</td>
                      <td>{fullname}</td>
                    </tr>
                    <tr>
                      <td>birth of date :</td>
                      <td>{bod}</td>
                      <td>gender :</td>
                      <td>{gender}</td>
                    </tr>
                    <tr>
                      <td>address :</td>
                      <td>{address}</td>
                      <td>age :</td>
                      <td>{age}</td>
                    </tr>
                    <tr>
                      <td>mobile :</td>
                      <td>{mobile}</td>
                      <td>email :</td>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <td>BB. No :</td>
                      <td>{bbno}</td>
                      <td>surname :</td>
                      <td>{surname}</td>
                    </tr>
                    <tr>
                      <td>forename :</td>
                      <td>{forename}</td>
                      <td>fullname :</td>
                      <td>{fullname}</td>
                    </tr>
                    <tr>
                      <td>birth of date :</td>
                      <td>{bod}</td>
                      <td>gender :</td>
                      <td>{gender}</td>
                    </tr>
                    <tr>
                      <td>address :</td>
                      <td>{address}</td>
                      <td>age :</td>
                      <td>{age}</td>
                    </tr>
                    <tr>
                      <td>mobile :</td>
                      <td>{mobile}</td>
                      <td>email :</td>
                      <td>{email}</td>
                    </tr>
                  </tbody>
                </table>
                <Footer />
              </section>
            </>
      );
    }
}
