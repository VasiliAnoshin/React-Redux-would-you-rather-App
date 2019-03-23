import {RECEIVE_USERS, UPDATE_USER_QUESTIONLIST, SAVE_ANSWER } from '../actions/users'


export default function users(state ={}, action)
{
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
        }
        case UPDATE_USER_QUESTIONLIST:
            return{
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                  }
            }
        default:
        return state
    }
}

