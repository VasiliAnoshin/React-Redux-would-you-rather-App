import React, { Component } from 'react';
import { connect } from 'react-redux'

class LogOut extends Component 
{
    handleLogOut= (e) => {
        const boom = 'Clac Clac !!!'
        console.log(boom)
    }
    render(){
    return (
        <nav className='logoutNav'>
          <ul>
            <li>
                 <span>Hello {this.props.id}</span>
                <img src={this.props.imgUrl} alt='logoUrl'className ='logOutImg'/>
                <button onClick={this.handleLogOut}> LogOut </button>
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