import React , {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

class LoginForm extends Component
{
    state =
    {
        toHome: false,
    }
    render(){
        const { toHome } = this.props
        if (toHome === true) {
            return <Redirect to='/' />
          }
          const {users} = this.props;
          return(
            <div className = 'login'>
                <div className = 'loginHeader'> 
                    <h3 className = 'center'> Would you rather App - Welcome </h3> 
                    <h5 className = 'center'>Press sign in to continue</h5>
                </div>
                <img src ="http://stickersmag.com/wp-content/uploads/2018/03/s-l500.jpg" className = "formAvatar" alt="avatar"></img>
                <h3 className = 'center'> <span className ='signInTxt'>Sign in </span></h3>
                <form className='logForm' onSubmit={this.handleSubmit}>
                    <select className='slct'>
                    { Object.values(users) !== null  && ( Object.values(users).map((user) => 
                        // <img src={user.avatarURL} alt="selectLogo"></img>
                        <option key ={user.id}>
                            {user.name}
                        </option>))
                    }
                    </select>
                    <button
                        className='btn'
                        type='submit'>
                        Submit
                    </button>
                </form>
            </div>
          )
    }
}

function mapStateToProps(state = {}) {
    // const { users } = state
    return { users : state.users }
  }

export default connect(mapStateToProps)(LoginForm)