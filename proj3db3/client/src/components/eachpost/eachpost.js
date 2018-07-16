import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './eachpost.css';

class EachPost extends Component {
  deleteAPost(postid){
    this.props.onDelete(postid);
  }

  render() {
    return (
      <li className="Post"> 
        <form>
          User: <input type='text' placeholder={this.props.post.user.displayName} readonly/><br/>
          Company: <input type='text' placeholder={this.props.post.companyloc.companyName} readonly/><br/>
          Location: <input type='text' placeholder={this.props.post.companyloc.location} readonly/><br/>
          Job: <input type='text' placeholder={this.props.post.job.jobTitle} readonly/><br/>
          <divX>Question: <input className='question' type='text' placeholder={this.props.post.textOfPost} readonly/></divX><br/>
          Reasoning: <input className='reasoning' type='text' placeholder={this.props.post.reason} readonly/><br/>
        </form>
        {/* <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>&nbsp;&nbsp;remove</a> */}
      </li>
    );
  }
}

EachPost.propTypes = {
  eachpost: PropTypes.object,
  onDelete: PropTypes.func
}

export default EachPost;