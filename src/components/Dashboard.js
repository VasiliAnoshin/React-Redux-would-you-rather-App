import React, {Component} from 'react'
import PollList from '../components/PollList'

class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            ansBtnStyle : 'PollLstBtn',
            notAnswBtnStyle: 'active PollLstBtn',
            section : 'UnAnsweredQuestion'
        }
    }

    handleClick= (e) => {
        this.setState({
            ansBtnStyle: 'active PollLstBtn',
            notAnswBtnStyle: 'PollLstBtn',
            section: 'AnsweredQuestions'
        })
    }

    notAnswHandleClick =(e) =>{
        this.setState({
            ansBtnStyle: 'PollLstBtn',
            notAnswBtnStyle: 'active PollLstBtn',
            section: 'UnAnsweredQuestions'
        })
    }

    render(){
        this.Answered = ''
        return(       
            <div>
                <ul className ='SubMenu'>
                    <li className ='SubMenuOption'>
                        <button className = {this.state.ansBtnStyle} onClick={this.handleClick} > Answered Questions </button>
                    </li>
                    <li className ='SubMenuOption'>
                        <button  className = {this.state.notAnswBtnStyle} onClick={this.notAnswHandleClick} > Unanswered questions </button>
                    </li>
                </ul>
                {this.state.section === 'AnsweredQuestions' ?
                    <PollList sectionChoice = {1}/>
                    :
                    <PollList sectionChoice = {2}/>
                }

            </div>
        )
    }
}

export default Dashboard;