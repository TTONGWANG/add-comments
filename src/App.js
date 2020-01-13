import React from 'react';
import CommentAdd from './components/Comment-add'
import CommentList from './components/Comment-list'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments : [
        {username:'Tom', content:'React is good'},
        {username:'Jerry', content: 'React is so hard'}
      ]
    }
  }

  addComment = (comment)=>{
    const {comments} = this.state
    comments.unshift(comment);
    this.setState({
      comments
    })
  }

  deleteComment = (index) =>{
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({
      comments
    })
  }

  render(){
    const {comments} = this.state
  return (
    <div className="App">
      <h1>please send your comments</h1>
      <CommentAdd addComment = {this.addComment}/>
      <br/>
      <CommentList  comments = {comments} deleteComment = {this.deleteComment}/>
    </div>
  );
  }
}

export default App;
