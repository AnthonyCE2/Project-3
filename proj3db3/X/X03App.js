import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import uuid from 'uuid';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import AllPosts from './components/allposts/allposts';
import BlogPosts from './components/blogpost/blogpost';
import OnePost from './components/onepost/onepost';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      users: [],
      companies: [],
      locations: []
    }
  }
  
  getPosts() {
    console.log("in get post")
    fetch('/blogPost/all')
      // .then(result => console.log(result))
      .then(result => result.json())
      .then(posts => this.setState({posts}, () => console.log('blogposts Fetched: ', this.state)));
      // .then(blogposts => this.setState({blogposts}));
  }

  // getPosts() {
  //   console.log("in get post")
  //   $.ajax({
  //     url: 'http://localhost:5000/blogPost/all',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({posts: data}, function(){
  //         console.log("the posts are\n", this.state.posts);
  //       });
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log("xhr is ", xhr, "\nstatus is ", status, 
  //       "\n err is ", err);
  //     }
  //   });
  // }

  componentWillMount() {
    this.getPosts();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"> Welcome to React... </h1>
          </header>
          <AllPosts />
          <BlogPosts />
          <OnePost postID={3} />
        </div>
      </Router>
    );
  }
}

export default App;
