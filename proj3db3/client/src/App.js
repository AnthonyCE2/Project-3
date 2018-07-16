import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import uuid from 'uuid';
import $ from 'jquery';
import logo from './logo.svg';
import AllPosts from './components/allposts/allposts';
import LoginBox from './components/login/loginBox'
import BlogPosts from './components/blogpost/blogpost';
import OnePost from './components/onepost/onepost';
import SomeMenus from './components/menus/menus';
import MakePostButton from './components/makepost/makepostbutton';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: '',
      posts: [],
      users: [],
      companies: [],
      locations: []
    }
  }
  
  render() {
    // console.log("in app.js render this.state is ", this.state)
    return (
      // <Router>
        <div className="App">
          <LoginBox loginStatus={this.state.currentUser}/>
          {/* <MakePostButton loginStatus={this.state.currentUser}/> */}
          <MakePostButton loginStatus={true}/>

          <SomeMenus />
          <AllPosts/>
          {/* <BlogPosts /> */}
          <OnePost postID={3} />
        </div>
      // </Router>
    );
  }
}

export default App;



