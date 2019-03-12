import React, { Component } from 'react';
import { connect } from 'react-redux'

class LogOut extends Component 
{
    render(){
    return (
        <nav className='logoutNav'>
          <ul>
            <li>
                Hello {this.props.id} 
                <img src={this.props.imgUrl} alt='logoUrl'className ='logOutImg'/>
                
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