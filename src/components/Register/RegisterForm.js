import React, { Component } from 'react';
import FormInput from '../Form/FormInput';
import FormButton from '../Form/FormButton';
import { registerValidation } from '../utils/validation';
import _ from 'lodash';
import '../styles/Form.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      validation: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
      },
      registering: false,
      error: {},
      valid: false,
      status: ''
    };
  }

  handleChange = e => {
    e.preventDefault();
    const data = { ...this.state.data, [e.target.name]: e.target.value };
    const fieldName = e.target.name;
    const { error, valid, validation } = registerValidation({
      data,
      fieldName,
      validation: this.state.validation
    });

    this.setState(prevState => ({
      data: { ...prevState.data, ...data },
      error: { ...prevState.error, ...error },
      validation,
      valid
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.checkIfValid()) {
      const { data } = { ...this.state };
      this.props.requestRegister(data);
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.registering !== prevState.registering) {
      return { registering: nextProps.registering };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    //check if form is being submitted
    if (prevProps.registering !== this.props.registering) {
      this.setState({ registering: this.props.registering });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='input-form'>
          <div className='input-form-title'>
            <h1>Register</h1>
            <p>Please fill up this form to create an account.</p>
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
                  error={this.state.error.firstName}
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
                  error={this.state.error.lastName}
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
              disabled={this.state.registering}
              error={this.state.error.password}
            />

            <FormInput
              name='confirmPassword'
              type='password'
              title='Repeat Password'
              placeholder='Enter Repeat Password'
              onChange={this.handleChange}
              value={this.state.data.confirmPassword}
              required
              disabled={this.state.registering}
              error={this.state.error.confirmPassword}
            />
            <FormButton
              onSubmit={'Registering...'}
              text={'Register'}
              submitting={this.state.registering}
              disabled={this.state.registering || !this.state.valid}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
