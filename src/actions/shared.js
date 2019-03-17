import {_getUsers} from '../utils/_DATA'
import {receiveUsers,addQuestToUser} from '../actions/users'
import {showLoading, hideLoading} from 'react-redux-loading'
import {_getQuestions} from '../utils/_DATA'
import {receiveQuestions,addQuestion} from '../actions/questions'
import {_saveQuestion} from '../utils/_DATA'

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

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question,users) => {
            dispatch(addQuestion(question));
            dispatch(addQuestToUser(question))
        })
        .then(() => dispatch(hideLoading()))
    }
}