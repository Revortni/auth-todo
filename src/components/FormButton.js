import React from 'react';
import './styles/FormInput.css';

const FormButton = ({ onSubmit, text, disabled, submitted }) => {
  return (
    <button type='submit' className='form-submit-btn' disabled={disabled}>
      {submitted ? onSubmit : text}
    </button>
  );
};
export default FormButton;
