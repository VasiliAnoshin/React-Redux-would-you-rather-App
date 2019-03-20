import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Poll extends Component {
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
                            <Link to={`/questions/${this.props.questionId}`}>Poll Option</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Poll);