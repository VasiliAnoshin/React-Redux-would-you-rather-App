import React, {Component} from 'react'

class Poll extends Component {

    handleLogOut(){
        //<TODO> add functionality  
    }
    render(){
        return(
            <div>
                <p> {this.props.userName} asks : </p>
                <img src={this.props.imgUrl} alt='logoUrl'className ='logOutImg'/>
                <p> Would you rather : </p>
                <span> {this.props.questionText} </span>
                <button onClick={this.handleLogOut} > LogOut </button>
            </div>
        )
    }
}

export default Poll ;