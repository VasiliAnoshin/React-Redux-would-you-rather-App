import React , {Component} from 'react'
import { Redirect } from 'react-router-dom'

class LoginForm extends Component
{
    state ={
        toHome: false,
    }
    render(){
        const { toHome } = this.state
        if (toHome === true) {
            return <Redirect to='/' />
          }
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

export default LoginForm