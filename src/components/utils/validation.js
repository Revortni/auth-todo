const emailValidation = email => {
  return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
};

const nameValidation = name => {
  return name.match(/^[a-z ,.'-]+$/i);
};

export const registerValidation = data => {
  let payload = {
    data,
    error: {},
    valid: true
  };

  Object.keys(data).forEach(value => {
    switch (value) {
      case 'firstName':
        if (!data.firstName) {
          payload.valid = false;
          payload.error.firstName = 'First Name is required';
        } else if (!nameValidation(data.firstName)) {
          payload.valid = false;
          payload.error.firstName = 'First Name is invalid';
        } else payload.error.firstName = null;
        break;
      case 'lastName':
        if (!data.lastName) {
          payload.valid = false;
          payload.error.lastName = 'Last Name is required';
        } else if (!nameValidation(data.lastName)) {
          payload.valid = false;
          payload.error.lastName = 'Last Name is invalid';
        } else payload.error.lastName = null;
        break;
      case 'email':
        if (!data.email) {
          payload.valid = false;
          payload.error.email = 'Email is required';
        } else if (!emailValidation(data.email)) {
          payload.valid = false;
          payload.error.email = 'Please enter a valid email address';
        } else payload.error.email = null;

        break;
      case 'password':
        if (!data.password) {
          payload.valid = false;
          payload.error.password = 'Password is required';
        } else if (data.password.length < 3) {
          payload.valid = false;
          payload.error.password =
            'Your password needs to be between 8 and 30 characters long';
        } else if (data.password !== data.confirmPassword) {
          payload.valid = false;
          payload.error.password = 'Confirm password must match with password';
        } else payload.error.password = null;

        break;
      case 'confirmPassword':
        if (!data.confirmPassword) {
          payload.valid = false;
          payload.error.confirmPassword = 'Confirm password is required';
        } else payload.error.confirmPassword = null;
        break;
      default:
        break;
    }
  });
  return payload;
};

export const loginValidation = data => {
  let payload = {
    data,
    error: {},
    valid: true
  };

  // validation
  Object.keys(data).forEach(function(value) {
    switch (value) {
      case 'email':
        if (!data.email) {
          payload.valid = false;
          payload.error.email = 'Email is required';
        } else if (!emailValidation(data.email)) {
          payload.valid = false;
          payload.error.email = 'Please enter a valid email address';
        } else payload.error.email = null;

        break;
      case 'password':
        if (!data.password) {
          payload.valid = false;
          payload.error.password = 'Password is required';
        } else {
          payload.error.password = null;
        }
        break;
      default:
        break;
    }
  });
  return payload;
};
