import React, {Component} from 'react'
import { connect } from 'react-redux'

class Question extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                BEBEBE
            </div>
        )
    }
}

function mapStateToProps({questions}, props) {
    const{question_id} = props.match.params;
    console.log(question_id)
    return{
        question_id
    }
}

export default  connect(mapStateToProps)(Question)