import React, {Component} from 'react'
import { connect } from 'react-redux'
import {handleSaveAnswer} from '../actions/shared'
import {withRouter} from "react-router-dom";

class Question extends Component {
    constructor(){
        super();

        this.state = {
            selectedOption: 'optionOne'
        }
    }

    handleSaveAnswer = (e) =>{
        const {dispatch, question_id, userId}  = this.props
        const {selectedOption} = this.state
        dispatch(handleSaveAnswer(userId, question_id, selectedOption))
    }

     handleOptionChange = (e)  =>{ 
         this.setState({
           selectedOption: e.currentTarget.value
          });
      }

    render() {
        if(this.props.userName === null){
            return(
                <div className="errorPage">
                    <p>404 Error ! Page doesn't exist !!!</p>
                 </div>  
            )
        }
        let firstOPtion, secondOption
        if(this.props.allQuestions[this.props.question_id].optionOne.votes.includes(this.props.userId))
        {
            firstOPtion  = "marked"
            secondOption = "unmarked"
        }else{
            firstOPtion  = "unmarked"
            secondOption = "marked"
        }

        return (
            <div className = "questPoll">
               <p className = "pollAuther">Asked by {this.props.userName} </p>
               <hr/>
               <div className ="parent"> 
                    <div className = "left">
                        <img src={this.props.userUrl} alt='logoUrl'className ='pollImg '/>
                    </div>
                    <div className = "middle">
                        <hr width="1" size="190" ></hr>
                    </div>
                    { this.props.vote === false ?
                        <div className = "right">
                            <p>Would You Rather : </p>
                            <p><input type="radio" value="optionOne" checked={this.state.selectedOption === 'optionOne'} 
                                                   onChange={this.handleOptionChange} /> {this.props.OptionOne.text}</p>
                            <p><input type="radio" value="optionTwo" checked={this.state.selectedOption === 'optionTwo'} 
                                                   onChange={this.handleOptionChange} /> {this.props.OptionTwo.text}</p>
                            <button onClick={this.handleSaveAnswer} className ="btn"> Save Answer </button>
                        </div>
                        :
                        <div>
                            <div className = "right">
                            <p className = "resText">Results : </p>
                            <div className = {firstOPtion}>
                                <p> Would you rather : {this.props.OptionOne.text}</p>
                                  <progress max="100" value={(this.props.OptionOne.votes.length / (this.props.OptionOne.votes.length + this.props.OptionTwo.votes.length))* 100} 
                                   className ="progress-bar">
                                  </progress>
                                  <p>{this.props.OptionOne.votes.length} out of {this.props.OptionOne.votes.length + this.props.OptionTwo.votes.length} votes</p>
                            </div>
                            <div className = {secondOption}>
                                <p> Would you rather : {this.props.OptionTwo.text}</p>
                                <progress max="100" value={(this.props.OptionTwo.votes.length / (this.props.OptionOne.votes.length + this.props.OptionTwo.votes.length))* 100}  
                                 className ="progress-bar">
                                     <span >{(this.props.OptionTwo.votes.length / (this.props.OptionOne.votes.length + this.props.OptionTwo.votes.length))* 100}</span>
                                </progress>
                                <p>{this.props.OptionTwo.votes.length} out of {this.props.OptionOne.votes.length + this.props.OptionTwo.votes.length} votes</p>
                            </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, props) {
    const{question_id} = props.match.params;
    const allQuestions = questions
    const curUser = authedUser
    const usersLst = users 
    let userName, userUrl, OptionOne,  OptionTwo;
    const curQuestion = questions[question_id]
    userName =  (curQuestion === undefined) ? null : usersLst[questions[question_id].author].name;
    userUrl =   (curQuestion === undefined) ? null : usersLst[questions[question_id].author].avatarURL;
    OptionOne = (curQuestion === undefined) ? null : allQuestions[question_id].optionOne
    OptionTwo = (curQuestion === undefined) ? null : allQuestions[question_id].optionTwo
    let vote =  (curQuestion === undefined) ? null : allQuestions[question_id].optionOne.votes.concat(allQuestions[question_id].optionTwo.votes).includes(usersLst[authedUser].id)

    return({
            usersLst,
            allQuestions,
            curUser,
            userUrl,
            OptionOne,
            OptionTwo,
            userName,
            vote,
            question_id,
            userId : usersLst[curUser].id
        })
    }

export default withRouter(connect(mapStateToProps)(Question))