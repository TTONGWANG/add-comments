import React from 'react'

class CommentAdd extends React.Component{
    state = {
        username:'',
        content:''
    }


    handleSubmit = () =>{
        const comment = this.state;
        this.props.addComment(comment)
        this.setState({
            username:'',
            content:''
        })

    }

    handleNameChange =(event)=>{
        const username = event.target.value;
        this.setState({
            username
        })
        
    }

    handleContentChange =(event)=>{
        const content = event.target.value;
        this.setState({
            content
        })
       
    }

    render(){
        const {username, content} = this.state
        return(
            <div>
            <p>username</p>
            <input type = 'text' value = {username} onChange = {this.handleNameChange}></input>
            <p>comment</p>
            <textarea type = "content" value = {content} onChange = {this.handleContentChange}></textarea>
            <br/>
            <button onClick = {this.handleSubmit}>send</button>
            </div>
        )
    }
}

export default CommentAdd;