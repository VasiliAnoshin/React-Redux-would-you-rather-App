import {_getUsers} from '../utils/_DATA'
import {receiveUsers} from '../actions/users'

export function handleInitialUsers() {
    return(dispatch) =>{
        return _getUsers().then(({...users}) => {
            dispatch(receiveUsers(users))
        })
    }
}