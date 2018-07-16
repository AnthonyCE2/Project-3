import React, { Component } from 'react';
import './onepost.css';
// var thisNum = 1;

class OnePost extends Component {
  constructor() {
    super();
    this.state = {
      onepost: []
    }
  }

  componentDidMount() {
    // console.log("this.props is ", this.props)
    fetch('/blogPost/post/'+this.props.postID)
    // .then(result => console.log(result))
      .then(result => result.json())
      .then(onepost => this.setState({onepost}));
      // .then(onepost => this.setState({onepost}, () => console.log('aPost Fetched: ', onepost)));
  }

  render() {
    return (
      <div>
      {this.state.onepost.map(onepost => 
      <div>
      <h1>A Post</h1>
        <form>
          User: <input type='text' placeholder={onepost.user.displayName} readonly/><br/>
          Company: <input type='text' placeholder={onepost.companyloc.companyName} readonly/><br/>
          Location: <input type='text' placeholder={onepost.companyloc.location} readonly/><br/>
          Job: <input type='text' placeholder={onepost.job.jobTitle} readonly/><br/>
          Question: <input type='text' placeholder={onepost.textOfPost} readonly/><br/>
          Reasoning: <input type='text' placeholder={onepost.reason} readonly/><br/>
        </form>
      </div>
      )}
      
      </div>
    );
  }
}

export default OnePost; 