import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import MenuItems from './menuItems'
import $ from 'jquery'
// import uuid from 'uuid';
 
class SomeMenus extends Component {
  constructor(){
    super();
    this.state = {
      loaded: 'initial',
      filterChoices: ['None', 'User', 'Company', 'Location', 'Company And Location', 'Job', 'My Posts'],
      filterby: 'Company',
      dataArray: [],
      }
      this.filterSelect = this.filterSelect.bind(this);
      this.getData = this.getData.bind(this);
    }
  
  // returns uniform data objsect
  // ID, Name, tableName
  getData(tableName) {
    console.log("\n\ncalling get data and tableName is", tableName);
    // this.state.dataArray.slice(0)
    this.setState({dataArray: []})
    console.log("this should be empty ", this.state.dataArray)
    switch(this.state.filterby) {
      case 'Company':
        fetch('/all/companyloc')
          .then(result => result.json())
          .then(result2 => {
            // console.log("result2 is ", result2);
            result2.map( (item) => {
              let myDataItem = {ID: item.companyID, name: item.companyName}
              this.state.dataArray.push(myDataItem);
            })
            console.log("dataArray is ", this.state.dataArray)
            
        });
        break;
      case 'User':
        fetch("/allusers")
          .then(result => result.json())
          .then(result2 => {
          this.setState({dataArray: result2}, console.log("Xresult2 is ", result2, "\ndataArray is", this.state.dataArray));
        })
        break
      default:
        break;
    }
  }

  filterSelect(e) {
    // console.log("target value is ", e.target.value);
    switch(e.target.value) {
      case 'None':
        this.setState({filterby: 'None'}, () => {
          // console.log("this.filterby is ", this.state.filterby);
        });
        break;
      case 'User':
        this.setState({filterby: 'User'}, () => {
          this.getData('user')
        });
        break;
      case 'Company':
        this.setState({filterby: 'Company'}, () => {
          this.getData('companyloc')
        });
        break;
      case 'Location':
        this.setState({filterby: 'Location'}, () => {
          this.getData('companyloc')
        });
        break;
      case 'Company And Location':
        this.setState({filterby: 'Company And Location'}, () => {
          this.getData('companyloc')
        });
        break;
      case 'Job':
        this.setState({filterby: 'Job'}, () => {
          this.getData('jobs')
        });
        break;
      case 'My Posts':
        this.setState({filterby: 'My Posts'}, () => {
        });
        break;
     }
  }

  componentWillMount() {
      this.setState({dataArray:[]})
      this.getData('companyloc')
  }

  componentDidMount() {
    this.setState({dataArray:[]})
    this.getData('companyloc');
  };

  render() {
    let categoryOptions;
    return (

      <div id="someMenus">
        <div>
          <p></p>
          <label>Show All Posts By:&nbsp;&nbsp;</label>
              <select id="filterChoice" ref="filter" onChange={this.filterSelect}>
                <option value='None'>None</option>
                <option value='Company'>Company</option>
                <option value='Location'>Location</option>
                <option value='Company And Location'>Company &amp; Location</option>
                <option value='Job'>Job</option>
                <option value='User'>User</option>
                <option value='My Posts' className='userPostsOption'>Show my posts</option>
              </select>
          </div>
          {/* <subMenu /> */}
        <div id='fiterChosen'>
            <MenuItems source={this.state.dataArray} filterby={this.state.filterby} />
            {/* <MenuItems source={this.state.companies} filterby={this.state.filterby} /> */}
        </div>

      </div>
    );
  }
}

SomeMenus.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default SomeMenus;




 // static defaultProps = {
  //   categories: ['Web Design', 'Web Development', 'Mobile Development']
  // }

  // handleSubmit(e){
  //   if(this.refs.title.value === ''){
  //     alert('Title is required');
  //   } else {
  //     this.setState({newProject:{
  //       id: uuid.v4(),
  //       title: this.refs.title.value,
  //       category: this.refs.category.value
  //     }}, function(){
  //       //console.log(this.state);
  //       this.props.addProject(this.state.newProject);
  //     });
  //   }
  //   e.preventDefault();
  // }

  /* <form onSubmit={this.handleSubmit.bind(this)}>
  <div>
    <label>Title</label><br />
    <input type="text" ref="title" />
  </div>
  <div>
    <label>Category</label><br />
    <select ref="category">
      {categoryOptions}
    </select>
  </div>
  <br />
  <input type="submit" value="Submit" />
  <br />
</form> */
