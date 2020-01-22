import React, { Component } from 'react';
import './styles/LoginForm.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      token: '',
      ...props.data
    };
    console.log(this.state);
  }

  handleChange = e => {};

  handleSubmit = e => {};

  render() {
    return <div className='container'>Profile for {this.state.email}</div>;
  }
}

export default Dashboard;
