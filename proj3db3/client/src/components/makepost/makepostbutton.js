import React, { Component } from 'react';
import './makepost.css';

class MakePostButton extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    if (this.props.loginStatus){
    return (
     <div>
       <button id="makepost" type='makepost' value ='makepost' label="makepost">Make a Post</button>
     </div>
    );} else
    return (
      <div>
        <h2>You must Sign In to Post</h2>
      </div>
    )
  }
}

export default MakePostButton;