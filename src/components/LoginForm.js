import React, { Component } from 'react';
import FormInput from './FormInput';
import { loginValidation } from './utils/validation';
import FormButton from './FormButton';
import './styles/Form.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: '', password: '' },
      loggingIn: false,
      error: {},
      valid: false,
      status: ''
    };
  }

  handleChange = e => {
    e.preventDefault();
    let change = { [e.target.name]: e.target.value };
    this.setState(prevState => ({
      data: { ...prevState.data, ...change }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const inputData = { ...this.state.data };
    const { valid, error, data } = loginValidation(inputData);
    this.setState({ valid, error, data });
    this.props.requestLogin(data);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loggingIn !== prevState.loggingIn) {
      return { loggingIn: nextProps.loggingIn };
    } else return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loggingIn !== this.props.loggingIn) {
      this.setState({ loggingIn: this.props.loggingIn });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='input-form'>
          <div className='input-form-title'>
            <h1>Login</h1>
          </div>
          <div className='form-wrapper'>
            <FormInput
              name='email'
              type='text'
              title='Email'
              placeholder='Enter Email'
              onChange={this.handleChange}
              value={this.state.data.email}
              required
              disabled={this.state.loggingIn}
              error={this.state.error.email}
            />
            <FormInput
              name='password'
              type='password'
              title='Password'
              placeholder='Enter Password'
              onChange={this.handleChange}
              value={this.state.data.password}
              required
              disabled={this.state.loggingIn}
              error={this.state.error.password}
            />
            <FormButton
              onSubmit={'Logging in...'}
              text={'Login'}
              disabled={this.state.loggingIn || !this.state.valid}
              submitted={this.state.loggingIn}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
