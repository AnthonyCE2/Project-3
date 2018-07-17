import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EachPost from '../eachpost/eachpost';

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
      // .then(blogposts => this.setState({blogposts}));
      .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
  } 

  render() {
    console.log("Allposts.js:, this.PROPS is ", this.props);
    console.log("Allposts.js:, this.STATE is ", this.state);
    let eachPost;
    return (
      <div className="all-posts">
      <h3>All Posts</h3>
      {eachPost = this.state.posts.map(allPost => {
        console.log("hi there");
        return (
          <EachPost post={allPost} />
          );
        })
      }
    {/* // let eachPost;
    // if(this.state.posts.length){
    //   console.log("my my my", this.state.posts);
    //   eachPost = this.state.posts.map(allPost => {
    //     return (
    //       // <EachPost key={allPost.title} post={allPost} />
    //       <EachPost post={allPost} />
    //     );
    //   });
    // } */}    
        {/* {console.log("each post is", eachPost)} */}
        {/* {eachPost} */}
      </div>
    );
  }
} 

AllPosts.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default AllPosts;