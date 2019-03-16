import React, {Component} from 'react'

class Poll extends Component {

    handleLogOut(){
        //<TODO> add functionality  
    }
    render(){
        return(
            <div className = "poll">
                <p className = "pollAuther"> {this.props.userName} asks : </p>
                 <hr/>
                 <div className ="parent"> 
                    <div className = "left">
                        <img src={this.props.imgUrl} alt='logoUrl'className ='pollImg '/>
                    </div>
                    <div className = "middle">
                        <hr width="1" size="100" ></hr>
                    </div>
                    <div className = "right">
                        <p> Would you rather : </p>
                        <p> {this.props.questionText} </p>
                        <div>
                            <button onClick={this.handleLogOut} className = "pollBtn"  align="center"> View Poll </button> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Poll;