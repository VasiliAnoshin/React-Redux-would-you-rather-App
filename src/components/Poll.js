import React, {Component} from 'react'

class Poll extends Component {

    handleLogOut(){
        //<TODO> add functionality  
    }
    render(){
        return(
            <div className = "poll">
                <p className = "pollAuther"> {this.props.userName} asks : </p>
                <img src={this.props.imgUrl} alt='logoUrl'className ='pollImg '/>
                <p> Would you rather : </p>
                <span> {this.props.questionText} </span>
                <button onClick={this.handleLogOut} > View Poll </button>
            </div>
        )
    }
}

export default Poll ;