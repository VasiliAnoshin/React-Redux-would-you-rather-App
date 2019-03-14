import users from './users'
import { combineReducers } from 'redux'
import  authedUser  from '../reducers/authedUser'
import questions from '../reducers/questions'

export default combineReducers({
    users,
    authedUser,
    questions
})