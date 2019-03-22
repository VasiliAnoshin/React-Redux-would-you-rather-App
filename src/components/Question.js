import React, {Component} from 'react'
import { connect } from 'react-redux'

class Question extends Component {

    state = {
        selectedOption: 'option1'
    }

    handleLogOut(){
        console.log("add new answer !!!!")
    }

     handleOptionChange = (e)  =>{
         this.setState({
           selectedOption: e.currentTarget.value
          });
      }

    render() {
        return (
            <div className = "questPoll">
               <p className = "pollAuther">Asked by {this.props.userName} </p>
               <hr/>
               <div className ="parent"> 
                    <div className = "left">
                        <img src={this.props.userUrl} alt='logoUrl'className ='pollImg '/>
                    </div>
                    <div className = "middle">
                        <hr width="1" size="100" ></hr>
                    </div>
                    { this.props.vote === false ?
                        <div className = "right">
                            <p>Would You Rather : </p>
                            <p><input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} /> {this.props.OptionOne}</p>
                            <p><input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>{this.props.OptionTwo}</p>
                            <button onClick={this.handleLogOut}> Save Answer </button>
                        </div>
                        :
                        <div>
                            <div className = "right">
                            <p>Results : </p>
                             <p> Would you rather : {this.props.OptionOne}</p>
                             <p> Would you rather : {this.props.OptionTwo}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, props) {
    //< TODO > What to do if question doesn't exist
    const{question_id} = props.match.params;
    console.log(question_id)
    const allQuestions = questions //< TODO > Decide is i need all questions  ??? 
    console.log(allQuestions)
    const curUser = authedUser
    console.log(curUser)
    const usersLst = users 
    let userName, userUrl, OptionOne,  OptionTwo;
    userName = usersLst[questions[question_id].author].name;
    console.log(userName);
    userUrl = usersLst[questions[question_id].author].avatarURL;
    console.log(userUrl);
    OptionOne = allQuestions[question_id].optionOne.text
    console.log(OptionOne);
    OptionTwo = allQuestions[question_id].optionTwo.text
    console.log(OptionTwo);

    let vote = allQuestions[question_id].optionOne.votes.concat(allQuestions[question_id].optionTwo.votes).includes(usersLst[authedUser].id)
    console.log(allQuestions[question_id].optionOne.votes.concat(allQuestions[question_id].optionTwo.votes))
    console.log(vote)

    // let vote =Object.assign({},allQuestions[question_id].optionOne.votes, allQuestions[question_id].optionTwo.votes).hasOwnProperty(userName)
    // console.log(Object.assign({},allQuestions[question_id].optionOne.votes, allQuestions[question_id].optionTwo.votes))
    //let vote = {...allQuestions[question_id].optionOne.votes, allQuestions[question_id].optionTwo.votes }
    //this.props.history.push(`/ErrorPage`)
    // questions[question_id] === false ?
    // {
    // }
          
    //  userUrl = usersLst[questions[question_id].author].avatarURL,
    // //     //  OptionOne = allQuestions[question_id].optionOne.text,
    // //     //  OptionTwo = allQuestions[question_id].OptionTwo.text
    // }:
    // {

    // }

    return({

        allQuestions,
        curUser,
        userUrl,
        OptionOne,
        OptionTwo,
        userName,
        vote
        //curUser
        // userUrl,
        // OptionOne,
        // OptionTwo
    })
    }

export default  connect(mapStateToProps)(Question)