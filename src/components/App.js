import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App'
import Nav from './Nav'
import LoginForm from './LoginForm'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <LoginForm />
        </div>
      </Router>
    );
  }
}

export default App;

