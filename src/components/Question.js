import React, {Component} from 'react'
import { connect } from 'react-redux'

class Question extends Component {

    render() {
        return (
            <div className = "Poll">
               
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, props) {
    const{question_id} = props.match.params;
    console.log(question_id)
    const allQuestions = questions
    console.log(allQuestions)
    const curUser = authedUser
    console.log(curUser)
    const usersLst = users 
    //const { userName, userUrl, OptionOne, OptionTwo } = newFunction();
    //const userName;    
    
    // questions[question_id] === true ?
    // {
    //     //  userName = usersLst[questions[question_id].author].name,
    //     //  userUrl = usersLst[questions[question_id].author].avatarURL,
    //     //  OptionOne = allQuestions[question_id].optionOne.text,
    //     //  OptionTwo = allQuestions[question_id].OptionTwo.text
    //  }:
    //  {

    //  }

    return(
        allQuestions
        //curUser
        // userUrl,
        // OptionOne,
        // OptionTwo
        )

    // function newFunction() {
    //     const userName, userUrl, OptionOne, OptionTwo;
    //     return { userName, userUrl, OptionOne, OptionTwo };
    // }
    }

export default  connect(mapStateToProps)(Question)