import {_getUsers} from '../utils/_DATA'
import {receiveUsers} from '../actions/users'
import {showLoading, hideLoading} from 'react-redux-loading'
import {_getQuestions} from '../utils/_DATA'
import {receiveQuestions} from '../actions/questions'

export function handleInitialUsers() {
    return(dispatch) =>{
        dispatch(showLoading())
        return _getUsers().then(({...users}) => {
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
}

export function getQuestions(){
    return(dispatch) =>{
        _getQuestions().then(({...questions}) => {
            dispatch(receiveQuestions(questions))
        })
    }
}