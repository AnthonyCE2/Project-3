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
    // .then(result => console.log(result))
      .then(result => result.json())
      .then(blogposts => this.setState({blogposts}));
      // .then(blogposts => this.setState({blogposts}, () => console.log('blogposts Fetched: ', blogposts)));
  }

  render() {
    return (
    //  result.json()
      <div><h1>Posts</h1>
      {this.state.blogposts.map(blogpost => <li key="blogpost.id"> 
      <form>
      <input type='text' placeholder={blogpost.user.displayName} readonly/><br/>
      <input type='text' placeholder={blogpost.companyloc.companyName} readonly/><br/>
      <input type='text' placeholder={blogpost.companyloc.location} readonly/><br/>
      <input type='text' placeholder={blogpost.job.jobTitle} readonly/><br/>
      <input type='text' placeholder={blogpost.textOfPost} readonly/><br/>
      <input type='text' placeholder={blogpost.reason} readonly/><br/>
      </form>
      </li>)}
      
      </div>
    );
  }
}

export default BlogPosts; 