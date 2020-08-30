import React from 'react';
import './input.scss';

const Input = ({ inputType, title, handleChange = () => null }) => {
  return (
    <div className='input__wrapper'>
      <label htmlFor={title}>
        {title}
        <input
          type={inputType}
          name={title?.toLowerCase()}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Input;
