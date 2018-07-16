import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(result => result.json())
      .then(customers => this.setState({customers}, () => console.log('Customers Fetched: ', customers)));
  }

  render() {
    return (
    <div><h2 >Customer </h2>
    {this.state.customers.map(customer => <li key="customer.id">{customer.firstName} {customer.lastName}</li>)}

    </div>
    );
  }
}

export default Customers;