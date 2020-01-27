import React from 'react';
import '../styles/FormInput.css';

const FormButton = ({ onSubmit, text, disabled, submitting }) => {
  return (
    <button type='submit' className='form-submit-btn' disabled={disabled}>
      {submitting ? onSubmit : text}
    </button>
  );
};
export default FormButton;
