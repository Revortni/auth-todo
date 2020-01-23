import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { fetchFromUrl } from './utils/fetch';
import { loginUrl, baseURL } from './config/url';
import './styles/FormPage.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loggingIn: false,
      redirectToReferrer: false
    };
  }

  requestLogin = data => {
    this.setState({ loggingIn: true });
    fetchFromUrl({ baseURL, url: loginUrl, method: 'post', data })
      .then(response => {
        const { token, ...rest } = response.data;
        localStorage.setItem(`token`, token);
        this.setState({ loggingIn: false, redirectToReferrer: true });
        this.props.setAuth({ auth: true, params: { ...rest, token } });
      })
      .catch(err => {
        if (err.response) {
          const { msg } = err.response.data || { msg: 'Error' };
          this.setState({ loggingIn: false, error: msg });
        } else {
          this.setState({ loggingIn: false, error: err.message || 'Error' });
        }
      });
  };

  render() {
    const error = this.props.error || this.state.error;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      console.log('redirecting to', from);
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
