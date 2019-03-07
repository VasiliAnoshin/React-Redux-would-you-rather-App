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
            <div>
                <h3 className = 'center'> Would you rather App - Welcome </h3> 
                <h5 className = 'center'>Press sign in to continue</h5>
                <h3 className = 'center'>Sign in </h3>
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