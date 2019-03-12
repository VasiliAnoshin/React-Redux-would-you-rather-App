import React, { Component } from 'react';
import { connect } from 'react-redux'

class LogOut extends Component 
{
    handleLogOut= (e) => {
        const boom = 'Clac Clac !!!'
    }
    render(){
    return (
        <nav className='logoutNav'>
          <ul>
            <li>
                Hello {this.props.id}  
                <img src={this.props.imgUrl} alt='logoUrl'className ='logOutImg'/>
                {/* <form onSubmit={this.handleSubmit} > */}
                <button onclick={this.handleLogOut}> LogOut </button>
                {/* </form> */}
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