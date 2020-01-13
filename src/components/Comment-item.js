import React from 'react'

class CommentItem extends React.Component{
    handleDelete=()=>{
        const {comment, deleteComment, index} = this.props
        if(window.confirm(`Do you want to delele ${comment.username} 's comment?`)){
            deleteComment(index)
        }
    }
    render(){
        const {comment} = this.props
        return(
            <li style = {{listStyle:"none"}}>
                <button onClick = {this.handleDelete}>delete</button>
                <p>{comment.username} say:</p>
                <p>{comment.content}</p>
            </li>
        )
    }
}

export default CommentItem;