import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import { fetchFromUrl } from './utils/fetch';
import { registerUrl, baseURL } from './config/url';
import './styles/FormPage.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registered: false,
      registering: false,
      email: false,
      error: null
    };
  }

  requestRegister = data => {
    this.setState({ registering: true });
    fetchFromUrl({ baseURL, url: registerUrl, method: 'post', data })
      .then(response => {
        this.setState({ registered: true });
        console.log(response);
      })
      .catch(err => {
        if (err.response) {
          const { msg } = err.response.data || { msg: 'Error' };
          this.setState({ registered: false, error: msg });
        } else {
          this.setState({ registered: false, error: err.message || 'Error' });
        }
      });
  };

  render() {
    return (
      <div className='container'>
        <div className='register-wrapper'>
          <RegisterForm
            requestRegister={this.requestRegister}
            loggingIn={this.state.loggingIn}
          />
          <div className='form-bottom-info-redirect'>
            <span>
              Already have an account? <Link to='/login'>Login</Link>
            </span>
          </div>
          {this.props.error ? (
            <div className='error-message-form'>{this.state.error}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Register;
