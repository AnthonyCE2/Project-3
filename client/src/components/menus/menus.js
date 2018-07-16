import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import MenuItems from './menuItems'
import $ from 'jquery'
// import uuid from 'uuid';

class SomeMenus extends Component {
  constructor() {
    super();
    this.state = {
      loaded: 'initial',
      filterChoices: ['None', 'User', 'Company', 'Location', 'Company And Location', 'Job', 'My Posts'],
      filterby: 'None',
      dataArray: [],
    }
    this.filterSelect = this.filterSelect.bind(this);
    this.getData = this.getData.bind(this);
    this.setMenu = this.setMenu.bind(this);
  }

  // returns uniform data objsect with ID, Name, tableName
  getData(dataNeeded, cb) {
    this.setState({
      dataArray: []
    })
    // console.log(`Calling getdata(${dataNeeded})`)
    // console.log(`this should be empty: ${this.state.dataArray}`)
    // switch(this.state.filterby) {
    switch (dataNeeded) {
      case 'None':
        return [];
        this.state.dataArray = [];
        console.log("case None -- dataArray is ", this.state.dataArray)
        break;
      case 'User':
        fetch("/all/users").then(result => result.json())
          .then(result2 => {
            result2.map((item) => {
              let myDataItem = {
                ID: item.userID,
                name: item.displayName,
                type: 'User'
              }
              this.state.dataArray.push(myDataItem);
            })
            console.log("case User -- dataArray is ", this.state.dataArray)
            cb(this.state.dataArray);
          })
        break;
      case 'Company':
        fetch('/all/company').then(result => result.json())
          .then(result2 => {
            console.log(`result2 is ${JSON.stringify(result2)}`)
            // result2.forEach(item => {})
            result2.map((item) => {
              let myDataItem = {
                ID: item.companyName,
                name: item.companyName,
                type: 'Company'
              }
              this.state.dataArray.push(myDataItem);
            })
            console.log("case Company -- dataArray is \n", this.state.dataArray)
            cb(this.state.dataArray);
          });
        break;
      //todo
      case 'Location':
        fetch('/all/locations').then(result => result.json())
          .then(result2 => {
            result2.map((item) => {
              let myDataItem = {
                ID: null,
                name: item.location,
                type: 'Location'
              }
              this.state.dataArray.push(myDataItem);
            })
            console.log("case Location -- dataArray is ", this.state.dataArray)
            cb(this.state.dataArray);
          });
        break;
        // todo
      case 'Company And Location':
        fetch('/all/companyandlocation').then(result => result.json())
          .then(result2 => {
            result2.map((item) => {
              let myDataItem = {
                ID: null,
                name: `${item.companyName} in ${item.location}`,
                type: 'Company And Location'
              }
              this.state.dataArray.push(myDataItem);
            })
            console.log("case Company And Location -- dataArray is ", this.state.dataArray)
            cb(this.state.dataArray);
          });
        break;
        case 'Job':
          fetch('/all/jobs').then(result => result.json())
            .then(result2 => {
              result2.map((item) => {
                let myDataItem = {
                  ID: item.jobID,
                  name: item.jobTitle,
                  type: 'Job'
                }
                this.state.dataArray.push(myDataItem);
              })
              console.log("case Job -- dataArray is ", this.state.dataArray)
              cb(this.state.dataArray);
            });
          break;
        //todo
        case 'My Posts':
          fetch('/all/myposts').then(result => result.json())
            .then(result2 => {
              result2.map((item) => {
                let myDataItem = {
                  ID: item.userID,
                  name: item.displayName,
                  type: 'MyPosts'
                }
                this.state.dataArray.push(myDataItem);
              })
              console.log("case My Posts -- dataArray is ", this.state.dataArray)
              cb(this.state.dataArray);
            });
          break;
      default:
        break;
    }
  }

  filterSelect(e) {
    switch (e.target.value) {
      case 'None':
        this.setState({
          filterby: 'None'
        }, () => {
          // console.log("this.filterby is ", this.state.filterby);
          this.getData('None', this.setMenu)
        });
        break;
      case 'User':
        this.setState({
          filterby: 'User'
        }, () => {
          this.getData('User', this.setMenu)
        });
        break;
      case 'Company':
        this.setState({
          filterby: 'Company'
        }, () => {
          console.log("chose company")
          this.getData('Company', this.setMenu)
        });
        break;
      case 'Location':
        this.setState({
          filterby: 'Location'
        }, () => {
          this.getData('Location', this.setMenu)
        });
        break;
      case 'Company And Location':
        this.setState({
          filterby: 'Company And Location'
        }, () => {
          this.getData('Company And Location', this.setMenu)
        });
        break;
      case 'Job':
        this.setState({
          filterby: 'Job'
        }, () => {
          this.getData('Job', this.setMenu)
        });
        break;
      case 'My Posts':
        this.setState({
          filterby: 'My Posts'
        }, () => {
          this.getData('My Posts', this.setMenu)
        });
        break;
    }
  }

  componentWillMount() {
    // this.setState({
    //   dataArray: []
    // })
    this.getData(this.state.filterby)
  }

  componentDidMount() {
    // this.setState({
    //   dataArray: []
    // })
    this.getData(this.state.filterby);
  };

  setMenu(input) {
    // console.log("set menu input is ", input);
    // // console.log("in set menu this.state.dataArray is ", this.state.dataArray);
    // console.log(this);
    // this.setState({dataArray: input})
    this.forceUpdate();
  }

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
        <div id='filterChosen'>
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