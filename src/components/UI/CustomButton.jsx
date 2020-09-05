import React from 'react';

import Button from './Button';
import './Styles/CustomButton.scss';

const CustomButton = ({ title = '', handleClick = () => null }) => {
  return (
    <Button type='submit' className='custom__button' onClick={handleClick}>
      {title}
    </Button>
  );
};

export default CustomButton;
