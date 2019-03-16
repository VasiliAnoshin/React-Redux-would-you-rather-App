import React, {Component} from 'react'

class NewQuestion extends Component{
    state = {
        firstOptText: '',
        secondOptText: ''
    }

    handleSubmit =(e) =>
    {

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
        const {firstOptText,secondOptText} = this.state
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
                        type='submit'>
                        Submit
                    </button> 
            </form>
        </div>
        )
    }
}

export default NewQuestion;