import React, { Component } from 'react';
import Header from '../../abstract/header';
import Input from '../../abstract/input';
import DropDown from '../../abstract/dropdown';
import Button from '../../abstract/button';
import Table from '../../abstract/Table';
import Footer from '../../abstract/footer'
import './style.css';

export default class ViewParticpants extends Component {
    state = {
        search: '',
        filter: ''
    }
    onChange = (event) => {
        const { value , name} = event.target;
        this.setState({[name]:value});
    }
    clear = () => {
        this.setState({search: ''})
    }
    render() {
    return (
      <React.Fragment>
            <Header value = 'View Participants' />
            <div className='search-bar'>
                <Input 
                label = 'Search'
                name = 'search'
                type = 'text'
                placeholder = 'Type Username'
                width = '300px'
                value = {this.state.search}
                onChange = {this.onChange}
                />
                <DropDown 
                label='Filter By:'
                name='filter'
                options={['name', 'mobile', 'date of birth']}
                width = '150px'
                value={this.state.filter}
                onChange = {this.onChange}
                />
                <div className='buttons'>
                    <Button
                    value = 'Search'
                    />
                    <Button
                    value = 'Clear'
                    color = '#D22F2F'
                    onClick = {this.clear}
                    />
                </div>
            </div>
                <Header value = 'Participants' />
                <Table
                 rows={[['first name', 'last name', 'Mobile No.', 'BB Id', 'Details'], ['Mohannad', 'Al-Hanafi', '0597116335', '0044', 'ssswee'], ['Mohannad', 'Al-Hanafi', '0597116335', '0044', 'ssswee'], ['Mohannad', 'Al-Hanafi', '0597116335', '0044', 'ssswee'], ['Mohannad', 'Al-Hanafi', '0597116335', '0044', 'ssswee']]}
                />
                <Footer />
      </React.Fragment>
    )
  }
}
