import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { fetchFromUrl } from './utils/fetch';
import { baseURL } from './config/url';
import { ProtectedRoute } from './Auth';
import Main from './Main';

class AuthRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      token: null,
      loaded: false,
      data: {},
      error: null
    };
  }

  verifyToken = ({ token }) => {
    const headers = { token };

    //verify token
    fetchFromUrl({ baseURL, url: 'verify', method: 'get', headers })
      .then(({ data }) => {
        this.setState({
          authenticated: true,
          token,
          loaded: true,
          data: { ...data.data, token }
        });
        this.props.history.push('/dashboard');
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 401) {
            localStorage.setItem('token', '');
          }
        }
        this.setState({
          loaded: true,
          error: err.response ? err.response.data.msg : err.message
        });
      });
  };

  componentDidMount() {
    localStorage.setItem('token', '');
    let token = localStorage.getItem('token');
    if (!token) {
      this.setState({ loaded: true, authenticated: false });
      return;
    }
    this.verifyToken({ token });
  }

  setTokenFromLogin = ({ auth, params }) => {
    this.setState({ authenticated: auth, loaded: true, data: params });
    this.props.history.push({
      pathname: '/dashboard'
    });
  };

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <>
            <Switch>
              <Route path='/public'>
                <div>public</div>
              </Route>
              <Route
                path='/login'
                render={props => (
                  <Login
                    {...props}
                    setAuth={this.setTokenFromLogin}
                    error={this.state.error}
                  />
                )}
              ></Route>
              <Route
                path='/register'
                render={props => (
                  <Register {...props} error={this.state.error} />
                )}
              ></Route>
              <ProtectedRoute
                path='/dashboard'
                isAuthenticated={this.state.authenticated}
                data={this.state.data}
              >
                <Main data={this.state.data} />
              </ProtectedRoute>
              <Route path='/'>
                <Redirect
                  to={{
                    pathname: '/dashboard',
                    state: { from: this.props.location }
                  }}
                />
              </Route>
            </Switch>
          </>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default AuthRoute;
