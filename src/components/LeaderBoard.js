import React , {Component} from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component
{
    render(){
        console.log(this.props.users)
        return(
            <div>
                BlaBLABLA
            </div>
        )
    }
}

function mapStateToProps({authedUser,users}){

    return {
      authedUser,
      users : Object.keys(users).sort(function(a,b)
      {
        return (users[b].questions.length + Object.keys(users[b].answers).length)  - (users[a].questions.length + Object.keys(users[a].answers).length)
      })
    }
  }

export default connect(mapStateToProps)(LeaderBoard)