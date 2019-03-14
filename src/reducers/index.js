import users from './users'
import { combineReducers } from 'redux'
import  authedUser  from '../reducers/authedUser'
import questions from '../reducers/questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    users,
    authedUser,
    questions,
    loadingBar: loadingBarReducer
})