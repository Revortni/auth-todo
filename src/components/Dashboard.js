import React, { Component } from 'react';

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
