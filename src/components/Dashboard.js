import React, {Component} from 'react'
import PollList from '../components/PollList'

class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            ansBtnStyle : 'PollLstBtn',
            notAnswBtnStyle: 'active PollLstBtn'
        }

        this.Answered = React.createRef();
    }

    handleClick= (e) => {
        this.setState({
            ansBtnStyle: 'active PollLstBtn',
            notAnswBtnStyle: 'PollLstBtn'
        })
    }

    notAnswHandleClick =(e) =>{
        this.setState({
            ansBtnStyle: 'PollLstBtn',
            notAnswBtnStyle: 'active PollLstBtn'
        })
    }

    render(){
        this.Answered = ''
        return(
            // <PollList />           
            <div>
                <ul className ='SubMenu'>
                    <li className ='SubMenuOption'>
                        <button className = {this.state.ansBtnStyle} onClick={this.handleClick} > Answered Questions </button>
                    </li>
                    <li className ='SubMenuOption'>
                        <button  className = {this.state.notAnswBtnStyle} onClick={this.notAnswHandleClick} > Unanswered questions </button>
                    </li>
                </ul>
                

            </div>
        )
    }
}

export default Dashboard;