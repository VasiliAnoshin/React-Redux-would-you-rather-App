export const RECEIVE_ALL_QUESTIONS= 'RECEIVE_ALL_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_USER_QUESTIONLIST = 'UPDATE_USER_QUESTIONLIST'
 
export function receiveQuestions(questions){
    return{
        type: RECEIVE_ALL_QUESTIONS,
        questions,
    }
}

export function addQuestion (question){
    return {
        type: ADD_QUESTION,
        question,
    }
}

