import React from 'react';
import './input.scss';

const Input = ({ inputType, title, value, handleChange = () => null }) => {
  return (
    <div className='input__wrapper'>
      <label htmlFor={title}>
        {title}
        <input
          className='input__profile'
          type={inputType}
          value={value}
          name={title?.toLowerCase()}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Input;
