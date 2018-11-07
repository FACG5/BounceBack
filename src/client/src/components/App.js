import React, { Component } from 'react';
import Sidebar from '../components/abstract/sidebar';
import Container from '../components/abstract/layout/Container';
import './App.css'

class App extends Component {
  state = {
    login: true
  }
  render() {
    return (
      <div className="App">
      {!this.state.login ? <h1>login page</h1> : (
        <React.Fragment>
        <Sidebar /> 
        <Container>
        {/* Content here */}
        </Container>
        </React.Fragment>
      )}
      </div>
    );
  }
}

export default App;
