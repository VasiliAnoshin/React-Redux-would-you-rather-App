import users from './users'
import { combineReducers } from 'redux'
import  authedUser  from '../reducers/authedUser'

export default combineReducers({
    users,
    authedUser
})