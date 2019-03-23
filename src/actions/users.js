export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_QUESTIONLIST = 'UPDATE_USER_QUESTIONLIST'

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
