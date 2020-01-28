import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { fetchFromUrl } from '../utils/fetch';
import { loginUrl, baseURL } from '../config/url';
import '../styles/FormPage.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loggingIn: false,
      redirectToReferrer: false,
      error: null
    };
  }

  //set the error state if any error response is received from server
  handleError = ({ err }) => {
    if (err.response) {
      const { msg } = err.response.data || { msg: 'Error' };
      this.setState({ loggingIn: false, error: msg });
    } else {
      this.setState({ loggingIn: false, error: err.message || 'Error' });
    }
  };

  //save received token after login, call auth of route component
  saveToken = ({ token, ...rest }) => {
    localStorage.setItem(`token`, token);
    this.setState({ loggingIn: false, redirectToReferrer: true });
    this.props.setAuth({ auth: true, params: { ...rest, token } });
  };

  requestLogin = data => {
    this.setState({ loggingIn: true });
    fetchFromUrl({ baseURL, url: loginUrl, method: 'post', data })
      .then(response => {
        this.saveToken(response.data);
      })
      .catch(err => {
        this.handleError({ err });
      });
  };

  render() {
    const error = this.props.error || this.state.error;
    //former path from where it was redirected to login
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    //login should redirect
    const { redirectToReferrer } = this.state;

    //redirect to initial route after authentication
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div className='container'>
        <div className='login-wrapper'>
          <LoginForm
            requestLogin={this.requestLogin}
            loggingIn={this.state.loggingIn}
          />
          <div className='form-bottom-info-redirect'>
            Create an account?
            <span>
              <Link to='/register'>Register</Link>
            </span>
          </div>
          {error ? <div className='form-error-message'>{error}</div> : null}
        </div>
      </div>
    );
  }
}

export default Login;
