import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
// import BlogPosts from './components/blogpost/blogpost'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loading: 'initial',
      blogposts: []
    }
  // console.log("so far so good");
  }

  loadData(resolve, reject) {
    var promise = new Promise((resolve, reject) => {
      fetch('/blogPost/all')
      // console.log(resolve)
      // .then(result => console.log(result))
      .then(blogposts => blogposts.json())
      .then(data => {
        this.setState({blogposts: data});
        console.log('blogposts Fetched: ', data);
        resolve(data);
      })
        // .then(result => result.json())
        // .then(blogposts => this.setState({blogposts}))

    });
    return promise
  }

  componentDidMount() {
    this.setState({loading: "true"});
    this.loadData()
    .then((data) => {
      console.log("data from component did Mount is");
      console.log(data);
    });

    // fetch('/blogPost/all')
    // // .then(result => console.log(result))
    //   .then(result => result.json())
    //   // .then(blogposts => this.setState({blogposts}));
    //   // console.log("this.blogposts is ", typeof this.blogposts)
    //   .then(blogposts => this.setState({blogposts}, () => console.log('blogposts Fetched: ', blogposts)));
    //   // console.log("exiting component mounted....")
  }

  render() {
    if (this.state.loading === 'initial') {
      // console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
      return <h2>Intializing...</h2>;
    }
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"> Welcome to React... </h1>
          </header>
          {/* <BlogPosts /> */}
          <div>
            <Route path="/blogPosts/" component={BlogPostsX} />
            {/* <Route path="/" render={() => <h1>hello world</h1>} /> */}

          </div>
        </div>
      </Router>
    );}
}

const BlogPostsX = ({ match }) => {
  // return (<div>Hello World</div>)


  console.log("match is \n", match)
  console.log("blogpostX this.blogposts is\n", this.blogposts)
  return (
    <div>Hellow World
    {/* <h1>Posts</h1>
    {this.blogposts.map(blogpost =>
    <li key="blogpost.id">
      <form>
        <input type='text' placeholder={blogpost.user.displayName} readonly/><br/>
        <input type='text' placeholder={blogpost.companyloc.companyName} readonly/><br/>
        <input type='text' placeholder={blogpost.companyloc.location} readonly/><br/>
        <input type='text' placeholder={blogpost.job.jobTitle} readonly/><br/>
        <input type='text' placeholder={blogpost.textOfPost} readonly/><br/>
        <input type='text' placeholder={blogpost.reason} readonly/><br/>
      </form>
    </li>
  )} */}
  </div> )
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
