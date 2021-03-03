import React from 'react';
import './input.scss';

const Input = (props) => {
  const { inputType, title, value, required, handleChange = () => null, handleBlur = () => null } = props;
  return (
    <div className='input__wrapper'>
      <label htmlFor={title}>
        {title}
        <input
          className='input__profile'
          type={inputType}
          value={value}
          name={title?.toLowerCase()}
          onChange={(e) => handleChange(e)}
          onBlur={handleBlur}
          min={inputType === 'number' ? 0 : ''}
          required={required}
        />
      </label>
    </div>
  );
};

export default Input;
