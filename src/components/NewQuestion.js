import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component{
    state = {
        firstOptText: '',
        secondOptText: '',
        toHome: false
    }

    handleSubmit =(e) =>
    {
        const {firstOptText , secondOptText } = this.state

        const {dispatch} = this.props

        dispatch(handleAddQuestion(firstOptText, secondOptText))

        this.setState(() => ({
            firstOptText:  '',
            secondOptText: '',
            toHome:true
          }))

    }
    firstOptionHandleChange = (e) => {
        const firstOptText = e.target.value
    
         this.setState(() => ({
            firstOptText
        }))
    }

    secondOptionHandleChange = (e) => {
        const secondOptText = e.target.value

        this.setState(() => ({
            secondOptText
        }))
    }


    render(){
        const {firstOptText,secondOptText, toHome} = this.state
        if(toHome === true){
            return <Redirect to='/' />
        }
        return(    
            <div className = "newPoll">
            <p className = "pollAuther"> Create New Question </p>
             <hr/>
             <span >Complete the question:</span>
             <div className = "textField">
                <p>Would you rather ...</p>
             </div>
            
             <form className='logForm' onSubmit={this.handleSubmit} >
                    <textarea 
                    placeholder="Enter Option One Here" 
                    value={firstOptText}
                    className='slct'
                    ref ={(input) => this.selectVal = input}
                    onChange = {this.firstOptionHandleChange}></textarea>  
                    <p className = "textField">....OR....</p>
                    
                    <textarea
                    placeholder="Enter Option Two Here" 
                    value={secondOptText} 
                    className='slct' 
                    ref ={(input) => this.selectVal = input}
                    onChange = {this.secondOptionHandleChange}>
                    </textarea> 
                    <button
                        className='btn'
                        type='submit'
                        disabled = {firstOptText ==='' || secondOptText ===''}>
                        Submit
                    </button> 
            </form>
        </div>
        )
    }
}

export default connect()(NewQuestion);