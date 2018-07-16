import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import EachPost from '../menus';
// import uuid from 'uuid';

class MenuItem extends Component {
  constructor(){
    super();
    this.state = {
      database: '',
      menuValues: [],
      filterby: '',
      dataArray: []
      }
    }
    
  render() {
    // console.log("MI Render():\n this.props is ", this.props)
    let X = this.props.source;
    let menuItems = X.map(item => {
        // console.log("items is ", item)
        return <option key={item.ID} value={item.name}>{item.name}</option>
      });
    if (menuItems.length != 0) {
      return (
        <div>
        <label>Select {this.props.filterby}:&nbsp;&nbsp;</label>
        <select>
          {menuItems}
        </select>
        </div>
      );
    } else {
      return null
    }
  }
  
}

MenuItem.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default MenuItem;
