import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EachPost from '../eachpost/eachpost';
import './allposts.css';

class AllPosts extends Component {
  // deletePost(postid){
  //   this.props.onDelete(postid);
  // }
  constructor() {
    super();
    this.state = {
      loaded: 'initial',
      posts: [],
      users: [],
      companies: [],
      locations: []
    }
  }
  
  componentWillMount() {
    fetch('/blogPost/all')
      .then(result => result.json())
      .then(posts => this.setState({posts}));
      // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
  } 

  render() {
    let eachPost;
    return (
      <div className="all-posts">
      <h2>All Posts</h2>
      {eachPost = this.state.posts.map(allPost => {
        return (
          <EachPost post={allPost} />
          );
        })
      }
      </div>
    );
  }
} 

AllPosts.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default AllPosts;