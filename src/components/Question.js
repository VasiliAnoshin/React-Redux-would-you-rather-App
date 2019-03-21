import React, {Component} from 'react'
import { connect } from 'react-redux'

class Question extends Component {

    render() {
        return (
            <div className = "poll">
               <p className = "pollAuther">Asked by {this.props.userName} </p>
               <hr/>
               <div className ="parent"> 
                    <div className = "left">
                        <img src={this.props.userUrl} alt='logoUrl'className ='pollImg '/>
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