export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_QUESTIONLIST = 'UPDATE_USER_QUESTIONLIST'
export const SAVE_ANSWER = "SAVE_ANSWER"

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}

export function addQuestToUser(question){
         return {
             type: UPDATE_USER_QUESTIONLIST,
             question
         }
}

export function saveAnswer(question){
      return {
          type: SAVE_ANSWER,
          question
      }
}
