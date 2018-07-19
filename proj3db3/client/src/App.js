import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import uuid from 'uuid';
import $ from 'jquery';
// import logo from './logo.svg';
// import AllPosts from './components/allposts/allposts';
import LoginBox from './components/login/loginBox'
// import BlogPosts from './components/blogpost/blogpost';
// import OnePost from './components/onepost/onepost';
import FilterMenus from './components/menus/menus';
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
    var mastheadStyle = {
      "background-image": "url('img/home-bg.jpg')"
    }
    return (
      <div className="App">
        < nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            {/* <!-- <a className="navbar-brand" href="index.html">Start Bootstrap</a> --> */}
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead" style={mastheadStyle}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>InterVw.Me</h1>
                  <span className="subheading">Odd Questions, Answered</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <LoginBox loginStatus={this.state.currentUser}/>
        <MakePostButton loginStatus={true}/>
        <FilterMenus />
        {/* <AllPosts /> */}
        {/* <BlogPosts /> */}
        {/* <OnePost postID={3} /> */}
      </div>
    );
  }
}

export default App;



