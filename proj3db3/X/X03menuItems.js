import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import EachPost from '../menus';
// import uuid from 'uuid';

class MenuItem extends Component {
  constructor(){
    super();
    this.state = {
      database: '',
      menuValues: []
      }
    }
    
  render() {
    console.log("MI Render(): this.props is ", this.props)
    // switch(this.props.filterby) {
    //   case'None':
    //     break;
    //   case'Company':
    //     this.setState(this.state.database, 'companyloc');
    //     console.log(this.state.database, this.props.dataArray)
    //     break;
    //   case'Location':
    //     break;
    //   case'Company And Location':
    //     break;
    //   case'Job':
    //     this.setState(this.state.database,  'jobs')
    //     break;
    //   case'User':
    //     break;
    //   case'My Posts':
    //     break;
    // }
    let X = this.props.source;
    let categoryOptions = X.map(category => {
        return <option key={category.companyID} value={category.companyName}>{category.companyName}</option>
      });
    return (
      <div>
      <label>Select {this.props.filterby}:&nbsp;&nbsp;</label>
      <select ref="company">
        {categoryOptions}
      </select>
      </div>
    );
  }
}

MenuItem.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default MenuItem;
