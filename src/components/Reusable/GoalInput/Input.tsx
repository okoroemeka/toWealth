import React from 'react';

import './goalInput.scss';

interface InputProps {
   labelTitle: string,
  icon: any,
  iconName ?: string,
  iconClassName ?: string,
  inputType : string,
  inputName : string,
  handleChange(e?:any): void,
  labelClassName?: string,
  inputWrapperClassName?:string,
  inputValue?:string|number,
  required?:boolean,
  minValue?: number
}

const Input:React.FC<InputProps> = ({
  labelTitle = '',
  icon,
  iconName = '',
  iconClassName = '',
  inputType = 'text',
  inputName = '',
  handleChange,
  labelClassName = '',
  inputWrapperClassName = '',
  inputValue = '',
  required,
  minValue = 0
}:InputProps):JSX.Element=> {
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
          min={minValue}
          required={required}
        />
      </div>
    </label>
  );
};

export default Input;
