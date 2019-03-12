import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App'
import Nav from './Nav'
import LoginForm from './LoginForm'
import { handleInitialUsers } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'


class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialUsers())
  }

  render() {
    return (
      <Router>
        <div className='container'>
            <Nav />
            {this.props.loading == true ?
                <div>
                  <LoginForm />
                </div>
                :
                <div>
                  <Route path='/' exact component={Dashboard} />
                </div> 
            }
        </div>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);

