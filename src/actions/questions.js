export const RECEIVE_ALL_QUESTIONS= 'RECEIVE_ALL_QUESTIONS'

export function receiveQuestions(questions){
    return{
        type: RECEIVE_ALL_QUESTIONS,
        questions,
    }
}