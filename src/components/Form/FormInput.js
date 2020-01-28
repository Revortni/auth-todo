import React from 'react';
import '../styles/FormInput.css';

const FormInput = props => {
  return (
    <div className='form-input-wrapper'>
      <label htmlFor={props.name}>
        <b>{props.title}</b>
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          required={props.required}
          onChange={props.onChange}
          disabled={props.disabled}
          id={props.name}
        />
        {props.error ? (
          <span className='form-input-error'>{props.error}</span>
        ) : null}
      </label>
    </div>
  );
};
export default FormInput;
