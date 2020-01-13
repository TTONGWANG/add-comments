import React from 'react'
import CommentItem from './Comment-item'

class CommentList extends React.Component{
    render(){
        const {comments,deleteComment} = this.props
        const display = comments.length === 0? 'block': 'none'
        return(
            <div>
                <h3>reply:</h3>
                <h2 style = {{display}}> no reply right now</h2>
                <ul>
                    {
                        comments.map((comment, index) => <CommentItem comment = {comment} deleteComment = {deleteComment} key = {index} index = {index}/>)
                    }
                </ul>

            </div>
        )
    }
}
export default CommentList;