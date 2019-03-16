import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from '../components/Poll'

class PollList extends Component {
    
    render(){
        return (
            <div>
                <ul>
                    {
                        Object.values(this.props.filteredQuestions).map((question) => 
                        <li key = {question.id}>
                            <Poll userName = {question.author} imgUrl = {this.props.users[question.author].avatarURL} questionText = {question.optionOne.text}/>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, sectionChoice ){
    const userAnswers = users[authedUser].answers
    console.log(userAnswers)
    console.log(sectionChoice)
    const filteredQuestions = (sectionChoice === 2) ?
     (Object.keys(questions).filter(key => !Object.keys(userAnswers).includes(key))
    .reduce((obj, key) => {
        return{
                ...obj,
                [key] : questions[key]
            }
        },{})) :
    (Object.keys(questions)
    .filter(key => Object.keys(userAnswers).includes(key))
    .reduce((obj, key) => {
        return{
                ...obj,
                [key] : questions[key]
            }
        },{}))
     console.log(filteredQuestions)
    
    return {
        users,
        filteredQuestions,
        authedUser
    }
}

export default connect(mapStateToProps)(PollList)