import React, { Component } from 'react';
import { connect } from 'react-redux'
import {removeAuthedUser} from '../actions/authedUser'

class LogOut extends Component 
{
    handleLogOut= (e) => {
        const {dispatch} = this.props;
        dispatch(removeAuthedUser(this.props.id))
    }
    render(){
    return (
        <nav className='logoutNav'>
          <ul>
            <li>
                <span>Hello {this.props.id}</span>
                <img src={this.props.imgUrl} alt='logoUrl'className ='logOutImg'/>
                <button onClick={this.handleLogOut} className = 'exit-btn'> LogOut </button>
            </li>
          </ul>
        </nav>
      )
    }
}

function mapStateToProps({users}, {id}){
    const imgUrl = users[id].avatarURL
    return{
        id,
        imgUrl
    }
}

export default connect(mapStateToProps)(LogOut)