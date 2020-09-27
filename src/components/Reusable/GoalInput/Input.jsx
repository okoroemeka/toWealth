import React from 'react';

import './goalInput.scss';

const Input = ({
  labelTitle = '',
  icon,
  iconName = '',
  iconClassName = '',
  inputType = 'text',
  inputName = '',
  handleChange = () => null,
  labelClassName = '',
  inputWrapperClassName = '',
  inputValue = '',
  required,
}) => {
  return (
    <label
      htmlFor={labelTitle.toLowerCase()}
      className={`lable ${labelClassName}`}
    >
      <h6 className='label__text'>
        {labelTitle ? labelTitle[0].toUpperCase() + labelTitle.slice(1) : ''}
      </h6>
      <div className={`input__wrapper ${inputWrapperClassName}`}>
        <img src={icon} alt={iconName} className={`icon ${iconClassName}`} />
        <input
          type={inputType}
          name={inputName}
          className='input'
          onChange={handleChange}
          value={inputValue}
          min='0'
          required={required}
        />
      </div>
    </label>
  );
};

export default Input;
