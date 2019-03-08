import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App'
import Nav from './Nav'
import LoginForm from './LoginForm'
import { handleInitialUsers } from '../actions/shared'
import { connect } from 'react-redux'


class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialUsers())
  }

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

export default connect()(App);

