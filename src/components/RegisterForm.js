import React, { Component } from 'react';
import FormInput from './FormInput';
import FormButton from './FormButton';
import './styles/Form.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      registering: false,
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
    const data = { ...this.state.data };
    // loginValidation(data);
    this.props.requestRegister(data);
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
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
          </div>
          <div className='form-wrapper'>
            <div className='name-input-wrapper clearfix'>
              <div className='name-input'>
                <FormInput
                  name='firstName'
                  type='text'
                  title='First Name'
                  placeholder='Enter First Name'
                  onChange={this.handleChange}
                  value={this.state.data.firstName}
                  required
                  disabled={this.state.registering}
                />
              </div>
              <div className='name-input'>
                <FormInput
                  name='lastName'
                  type='text'
                  title='Last Name'
                  placeholder='Enter Last Name'
                  onChange={this.handleChange}
                  value={this.state.data.lastName}
                  required
                  disabled={this.state.registering}
                />
              </div>
            </div>
            <FormInput
              name='email'
              type='text'
              title='Email'
              placeholder='Enter Email'
              onChange={this.handleChange}
              value={this.state.data.email}
              required
              disabled={this.state.registering}
            />

            <FormInput
              name='password'
              type='password'
              title='Password'
              placeholder='Enter Password'
              onChange={this.handleChange}
              value={this.state.data.password}
              required
              disabled={this.state.registering}
            />

            <FormInput
              name='password-repeat'
              type='password'
              title='Repeat Password'
              placeholder='Enter Repeat Password'
              onChange={this.handleChange}
              value={this.state.data.repeatPassword}
              required
              disabled={this.state.registering}
            />
            <FormButton
              onSubmit={'Registering...'}
              text={'Register'}
              submitted={this.state.registering}
              disabled={this.state.registering || !this.state.valid}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
