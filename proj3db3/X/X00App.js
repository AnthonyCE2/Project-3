import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import BlogPosts from './components/blogpost/blogpost'

class App extends Component {

state = {
  testposts: {}
}

  componentDidMount() {
    fetch('/blogPost/all')
    // .then(result => console.log(result))
      .then(result => result.json()) 
      .then(blogposts => this.setState({blogposts}));
      // .then(blogposts => this.setState({blogposts}, () => console.log('blogposts Fetched: ', blogposts)));
      // console.log("exiting component mounted....")
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"> Welcome to React... </h1>
          </header>
          {/* <BlogPosts /> */}
          <div>
            <Route path="/blogPost/all" component={BlogPostsX} />
          </div>
        </div>
      </Router>
    );}
}

const BlogPostsX = ({ match }) => {
  console.log(match)
  return (<div>Hello World</div>)
}

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h1 className="App-title"> Welcome to React... </h1>
//           </header>
//           <BlogPosts />
//         </div>
//       </Router>
//     );}
// }

// const App = () => (
//   <Router>
//     <div>
//       {/* <NavTabs /> */}
//       <Route exact path="/" component={BlogPosts} />
//       {/* <Route exact path="/about" component={About} />
//       <Route exact path="/blog" component={Blog} />
//       <Route path="/contact" component={Contact} /> */}
//     </div>
//   </Router>
// );



export default App;
