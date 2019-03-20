import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { BrowserRouter, Route } from 'react-router-dom'
// import {connect} from 'react-redux'

class Poll extends Component {
    // handleClick(e){
        
    //     console.log('Inside handle log')
    //     this.props.history.push('/')
    //  } 
    render(){
        return(
            // <Link to={`/questions/:${this.props.questionId}`}>
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
                            {/* <button onClick={this.handleClick} className = "pollBtn"  align="center"> View Poll </button>  */}
                            <Link to={`/questions/:${this.props.questionId}`}>Poll Option</Link>
                        </div>
                    </div>
                </div>
            </div>
        // </Link>
        )
    }
}

// function mapStateToProps(state = {}) {
//     return { 
//         dispatch : state,
//      }
//   }

// export default withRouter(connect(mapStateToProps)(Poll));
export default (Poll);