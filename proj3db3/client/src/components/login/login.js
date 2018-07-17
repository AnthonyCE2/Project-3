import React, { Component } from 'react';
import $ from 'jquery';
import './login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/')
      .then(result => result.json())
      .then(customers => this.setState({customers}), () => console.log('Customers Fetched: ', customers))
    };
  

  render() {
    return (
     result.json()

    );
  }
}

export default Customers;