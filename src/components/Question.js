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
                    <div className = "right">
                         <p>Would You Rather : </p>
                        <p><input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} /> {this.props.OptionOne}</p>
                        <p><input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>{this.props.OptionTwo}</p>
                        <button onClick={this.handleLogOut}> Submit </button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, props) {
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
        userName
        //curUser
        // userUrl,
        // OptionOne,
        // OptionTwo
    })

    // function newFunction() {
    //     const userName, userUrl, OptionOne, OptionTwo;
    //     return { userName, userUrl, OptionOne, OptionTwo };
    // }
    }

export default  connect(mapStateToProps)(Question)