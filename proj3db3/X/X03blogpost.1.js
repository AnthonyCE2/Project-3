import React, { Component } from 'react';
import './blogpost.css';


class BlogPosts extends Component {
  constructor() {
    super();
    this.state = {
      blogposts: []
    }
  }

  componentDidMount() {
    fetch('/blogPost/all')
      .then(result => result.json())
      .then(blogposts => this.setState({blogposts}));
      // .then(blogposts => this.setState({blogposts}, () => console.log('blogposts Fetched: ', blogposts)));
  }

  render() {
    return (
      <div><h1>Posts</h1>
      {this.state.blogposts.map(blogpost => 
      <li key="blogpost.id"> 
        <form>
          User: <input type='text' placeholder={blogpost.user.displayName} readonly/><br/>
          Company: <input type='text' placeholder={blogpost.companyloc.companyName} readonly/><br/>
          Location: <input type='text' placeholder={blogpost.companyloc.location} readonly/><br/>
          Job: <input type='text' placeholder={blogpost.job.jobTitle} readonly/><br/>
          Question: <input type='text' placeholder={blogpost.textOfPost} readonly/><br/>
          Reasoning: <input type='text' placeholder={blogpost.reason} readonly/><br/>
        </form>
      </li>)}
      
      </div>
    );
  }
}

export default BlogPosts; 