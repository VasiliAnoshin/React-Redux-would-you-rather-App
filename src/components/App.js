import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <div className="App">
              Start Project !!!
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
