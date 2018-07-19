import React, { Component } from 'react';
import './makepost.css';

class MakePostButton extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  loadPostPage() {
    window.location.href = "addpost.html"
  }

  render() {
    if (this.props.loginStatus){
    return (
     <div id="makePostBtnHolder" class="login"><button id="makepost"  class="login" onClick={this.loadPostPage}>Make a Post</button></div>
    );} else
    return (
      <div><h2>You must Sign In to Post</h2></div>
    )
  }
}

export default MakePostButton;

// type='makepost' value ='makepost' label="makepost"type='makepost' value ='makepost' label="makepost"

// onClick={window.location.href = "addpost.html"}