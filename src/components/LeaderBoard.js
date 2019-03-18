import React , {Component} from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component
{
    render(){
        console.log(this.props.users)
        return(
            <div>
                <ul>
                    {Object.keys(this.props.users).map((key) =>(
                        <li key ={this.props.users[key].id}>
                             <div className = "poll">
                                <p className = "pollAuther"> {this.props.users[key].name} </p>
                                <hr/>
                                <div className ="parent">
                                    <div className = "left">
                                        <img src={this.props.users[key].avatarURL} alt='logoUrl'className ='pollImg '/>
                                    </div>
                                    <div className = "middle">
                                        <hr width="1" size="100" ></hr>
                                    </div>
                                    <p>Answered questions : {Object.keys(this.props.users[key].answers).length}</p>
                                    <p>Created  questions : {this.props.users[key].questions.length} </p>
                                    <hr width="1" size="100" ></hr>
                                    <div className = "right">
                                        <div className = "smallPoll" >
                                        <p className = "pollAuther"> Score :  </p>
                                        <hr/>
                                            {Object.keys(this.props.users[key].answers).length + this.props.users[key].questions.length}
                                        </div>
                                       
                                    </div>
                                </div>
                             </div>
                        </li>
                    ))}
            </ul>
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
      }).reduce((obj,key) =>{
            return{
                ...obj,
                [key] : users[key]
            }
        },{})
    }
  }

export default connect(mapStateToProps)(LeaderBoard)