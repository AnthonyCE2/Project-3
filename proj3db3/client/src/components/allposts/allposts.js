import React, {
  Component
} from 'react';
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
    }
  }
  componentWillMount() {
    console.log("allmenues/compenentWILLmount, this.props.filterby is \n", this.props.filterby)
    switch (this.props.filterby) {
      case 'None':
        fetch('/blogPost/all')
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
      case 'Company':
        console.log("chose company_")
        fetch('/blogPost/company/' + this.props.filterSelector)
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        break;
      case 'Job':
        console.log("chose job")
        fetch('/blogPost/job/' + this.props.filterSelector)
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
      case 'Location':
        console.log("chose location")
        fetch('/blogPost/location/' + this.props.filterSelector)
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
      case 'Company And Location':
        console.log("chose location")
        var C = this.props.filterSelector.split('*IN* ')[0];
        var L = this.props.filterSelector.split('*IN* ')[1];
        console.log("company and location are", C, L)
        fetch(`/blogPost/companyloc/${C}/${L}`)
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
      case 'User':
        // console.log("chose user")
        fetch('/blogPost/user/' + this.props.filterSelector)
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
    }
  }


  componentDidMount() {
    console.log("allmenues/compenentDIDmount, this.props.filterby is \n", this.props.filterby)
    switch (this.props.filterby) {
      case 'None':
        fetch('/blogPost/all')
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
      case 'Company':
        console.log("chose company!")
        fetch('/blogPost/company/' + this.props.filterSelector)
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }))
          .then(this.forceUpdate());
        break;
      case 'Job':
        console.log("chose job")
        fetch('/blogPost/job/' + this.props.filterSelector)
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
      case 'Location':
        console.log("chose location")
        fetch('/blogPost/location/' + this.props.filterSelector)
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
      case 'Company And Location':
        console.log("chose location")
        var C = this.props.filterSelector.split('*IN* ')[0];
        var L = this.props.filterSelector.split('*IN* ')[1];
        console.log("company and location are", C, L)
        fetch(`/blogPost/companyloc/${C}/${L}`)

          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
      case 'User':
        // console.log("chose user")
        fetch('/blogPost/user/' + this.props.filterSelector)
          .then(result => result.json())
          .then(posts => this.setState({
            posts
          }));
        // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
        break;
    }
  }


refreshData() {
  // console.log("refreshing data");
  // console.log("refreshDada, allpost props are ", this.props);
  switch (this.props.filterby) {
    // case '':
    case 'None':
      fetch('/blogPost/all')
        .then(result => result.json())
        .then(posts => this.setState({
          posts
        }));
      // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
      break;
    case 'Company':
      console.log("chose company__")
      fetch('/blogPost/company/' + this.props.filterSelector)
        .then(result => result.json())
        .then(posts => this.setState({
          posts
        }));
      break;
    case 'Job':
      console.log("chose job")
      fetch('/blogPost/job/' + this.props.filterSelector)
        .then(result => result.json())
        .then(posts => this.setState({
          posts
        })
      );
      // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
      break;
    case 'Location':
      console.log("chose location")
      fetch('/blogPost/location/' + this.props.filterSelector)
        .then(result => result.json())
        .then(posts => this.setState({
          posts
        }));
      // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
      break;
    case 'Company And Location':
      console.log("chose location")
      var C = this.props.filterSelector.split('*IN* ')[0];
      var L = this.props.filterSelector.split('*IN* ')[1];
      console.log("company and location are", C, L)
      fetch(`/blogPost/companyloc/${C}/${L}`)

        .then(result => result.json())
        .then(posts => this.setState({
          posts
        }));
      // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
      break;
    case 'User':
      // console.log("chose user")
      fetch('/blogPost/user/' + this.props.filterSelector)
        .then(result => result.json())
        .then(posts => this.setState({
          posts
        }));
      // .then(posts => this.setState({posts}, () => console.log('Allposts.js: blogposts Fetched: ', posts)));
      break;
  }
}

render() {
  // console.log("rendering allposts"); 
  // console.log("allpost props are ", this.props);
  // if (Date.now() % 10 == 0)
  this.refreshData()
  let eachPost;
  console.log(this.state.posts)
  return ( 
  <div id="postsDisplayed" className = "all-posts" >
    <h2> Posts </h2> {
      eachPost = this.state.posts.map(retrievedPost => {
        // retrievedPost.jobID = 3;
        // console.log("retrieved Post is :\n", retrievedPost);
        return ( <EachPost post = {retrievedPost}/>
        );
      })
    } </div>
  );
}
}

AllPosts.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default AllPosts;