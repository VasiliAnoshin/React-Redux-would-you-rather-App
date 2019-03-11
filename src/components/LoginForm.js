import React , {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class LoginForm extends Component
{
    state =
    {
        toHome: false,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = this.props
        const id = this.selectVal.value
        dispatch(setAuthedUser(id))

        this.setState({
            toHome: id === null ? false : true,
             // toHome: true,
          })
         console.log(this.state.toHome)
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
                <form className='logForm' onSubmit={this.handleSubmit} >
                    <select className='slct' ref ={(input) => this.selectVal = input}>    
                    {Object.values(users) !== null  && ( Object.values(users).map((user) => 
                        <option key ={user.id} value = {user.id} >
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
    return { users : state.users, dispatch : state }
  }

export default connect(mapStateToProps)(LoginForm)