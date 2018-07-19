import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './eachpost.css';

class EachPost extends Component {
  deleteAPost(postid){
    this.props.onDelete(postid);
  }

  render() {
    // console.log(this.props);
    return (
      <li className="Post"> 
        <form className = "displayForm">
          <div id="shorterText">
          <div class="lineWrapper topRow "> <p class="qanda topRowqanda ">User: </p><input id="userBox" className="softcorner"  type='text' placeholder={this.props.post.displayName} readonly/></div>
          <div class="lineWrapper topRow "> <p class="qanda topRowqanda ">Company: </p><input id="companyBox" className="softcorner" type='text'  placeholder={this.props.post.companyName} readonly/> </div>
          <div class="lineWrapper topRow "> <p class="qanda topRowqanda ">Location: </p><input id="locBox" className="softcorner" type='text'  placeholder={this.props.post.location} readonly/> </div>
          <div class="lineWrapper topRow "> <p class="qanda topRowqanda ">Job: </p><input id="jobBox" className="softcorner" type='text'  placeholder={this.props.post.jobTitle} readonly/><br/> </div>
          </div>
          <div class="longerText"> <divX><p class="qanda"> Question: </p><textarea className='question softcorner' type='text' placeholder={this.props.post.textOfPost} readonly/></divX><br/> </div>
          <div class="longerText"> <p class="qanda">Reasoning: </p><textarea className='reasoning softcorner' type='text' placeholder={this.props.post.reason} readonly/><br/> </div>
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