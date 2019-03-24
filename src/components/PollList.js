import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from '../components/Poll'

class PollList extends Component {
    render(){
        console.log(this.props.filteredQuestions)
        return (
            <div>
                <ul>
                    {
                        Object.values(this.props.filteredQuestions).map((question) => 
                        <li key = {question.id}>
                            <Poll userName = {question.author} imgUrl = {this.props.users[question.author].avatarURL} 
                            questionText = {question.optionOne.text} questionId = {question.id}/>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, list ){
    const userAnswers = users[authedUser].answers
    console.log(userAnswers)
    console.log(list)
    console.log(list.sectionChoice === 2)
    const filteredQuestions = (list.sectionChoice === 2) ?
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
        filteredQuestions : Object.keys(filteredQuestions)
        .sort((a,b) => filteredQuestions[b].timestamp - filteredQuestions[a].timestamp)
        .reduce((obj,key) =>{
            return{
                ...obj,
                [key] : filteredQuestions[key]
            }
        },{}),
        authedUser
    }
}

export default connect(mapStateToProps)(PollList)