const emailValidation = email => {
  return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
};

const nameValidation = name => {
  return name.match(/^[a-z ,.'-]+$/i);
};

export const registerValidation = ({ fieldName, data, validation }) => {
  let payload = {
    error: {},
    valid: true
  };
  switch (fieldName) {
    case 'firstName':
      if (!data.firstName) {
        payload.error.firstName = 'First name is required';
        payload.valid = false;
      } else if (data.firstName.length < 3) {
        payload.error.firstName = 'First name must have atleast 3 characters';
        payload.valid = false;
      } else if (!nameValidation(data.firstName)) {
        payload.error.firstName = 'First name is invalid';
        payload.valid = false;
      } else payload.error.firstName = null;
      break;
    case 'lastName':
      if (!data.lastName) {
        payload.error.lastName = 'Last name is required';
        payload.valid = false;
      } else if (data.lastName.length < 3) {
        payload.error.lastName = 'Last name must have atleast 3 characters';
        payload.valid = false;
      } else if (!nameValidation(data.lastName)) {
        payload.error.lastName = 'Last name is invalid';
        payload.valid = false;
      } else payload.error.lastName = null;
      break;
    case 'email':
      if (!data.email) {
        payload.error.email = 'Email is required';
        payload.valid = false;
      } else if (!emailValidation(data.email)) {
        payload.error.email = 'Please enter a valid email address';
        payload.valid = false;
      } else payload.error.email = null;
      break;
    case 'password':
      if (!data.password) {
        payload.error.password = 'Password is required';
        payload.valid = false;
      } else if (data.password.length < 8) {
        payload.error.password =
          'Your password needs to be between 8 and 30 characters long';
        payload.valid = false;
      } else {
        payload.error.password = null;
        payload.error.confirmPassword = null;
        validation.confirmPassword = true;
      }
      break;
    case 'confirmPassword':
      if (!data.confirmPassword) {
        payload.error.confirmPassword = 'Confirm password is required';
        payload.valid = false;
      } else if (data.password !== data.confirmPassword) {
        payload.error.password = 'Password must match with confirm password';
        payload.valid = false;
      } else {
        payload.error.password = null;
        payload.error.confirmPassword = null;
        validation.password = true;
      }
      break;
    default:
      break;
  }

  validation[fieldName] = payload.valid;
  console.log(validation);
  const valid = Object.keys(validation).reduce((acc, x) => {
    return acc && validation[x];
  }, true);

  console.log(valid);
  return { ...payload, validation, valid };
};

export const loginValidation = ({ fieldName, data, validation }) => {
  let payload = {
    error: {},
    valid: true
  };
  // validation
  switch (fieldName) {
    case 'email':
      if (!data.email) {
        payload.error.email = 'Email is required';
        payload.valid = false;
      } else if (!emailValidation(data.email)) {
        payload.valid = false;
        payload.error.email = 'Please enter a valid email address';
        payload.valid = false;
      } else payload.error.email = null;
      break;
    case 'password':
      if (!data.password) {
        payload.error.password = 'Password is required';
        payload.valid = false;
      } else {
        payload.error.password = null;
      }
      break;
    default:
      break;
  }

  validation[fieldName] = payload.valid;

  const valid = Object.keys(validation).reduce((acc, x) => {
    return acc && validation[x];
  }, true);
  return { ...payload, validation, valid };
};
