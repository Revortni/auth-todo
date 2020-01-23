import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { fetchFromUrl } from './utils/fetch';
import { baseURL } from './config/url';
import { ProtectedRoute } from './Auth';
import Main from './Main';
import Dashboard from './Dashboard';

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
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 401) {
            //destroy token if token is invalid
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

  setTokenOnLogin = ({ auth, params }) => {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    this.setState({ authenticated: auth, loaded: true, data: params });
    this.props.history.push(from);
  };

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <Switch>
            <Route path='/public'>
              <div>public</div>
            </Route>
            <Route
              path='/login'
              render={props => (
                <Login
                  {...props}
                  setAuth={this.setTokenOnLogin}
                  error={this.state.error}
                />
              )}
            ></Route>
            <Route
              path='/register'
              render={props => <Register {...props} error={this.state.error} />}
            ></Route>
            <ProtectedRoute
              path='/dashboard'
              isAuthenticated={this.state.authenticated}
              data={this.state.data}
            >
              <Dashboard data={this.state.data} />
            </ProtectedRoute>
            <ProtectedRoute
              path='/app'
              isAuthenticated={this.state.authenticated}
              data={this.state.data}
            >
              <Main data={this.state.data} />
            </ProtectedRoute>
            <Route path='/'>
              <Redirect to='/app' />
            </Route>
          </Switch>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default AuthRoute;
