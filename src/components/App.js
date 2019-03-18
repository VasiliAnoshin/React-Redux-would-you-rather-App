import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import './App'
import Nav from './Nav'
import LoginForm from './LoginForm'
import { handleInitialUsers, getQuestions } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
import LogOut from '../components/LogOut'
import LeaderBoard from '../components/LeaderBoard'


class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialUsers())
    this.props.dispatch(getQuestions())
  }

  render() {
    return (
      <Router>
        <Fragment>
        <LoadingBar />
        <div className='container'>
            <Nav />
            {this.props.loading === true ?
                <div>
                  <LoginForm />
                </div>
                :
                <div>
                  <LogOut id ={this.props.authedUser}/>
                  <Switch>
                    <Route path='/' exact component={Dashboard}  />
                    <Route path='/add' exact component ={NewQuestion} />
                    <Route path='/leaderBoard' exact component = {LeaderBoard} />
                  </Switch>
                </div> 
            }
        </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser,users}){
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);

