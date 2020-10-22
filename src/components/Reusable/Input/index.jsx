import React from 'react';
import './input.scss';

const Input = (props) => {
  const { inputType, title, value, handleChange = () => null, handleBlur = () => null } = props;
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
          onBlur={handleBlur}
          min={inputType == 'number' ? 0 : ''}
        />
      </label>
    </div>
  );
};

export default Input;
