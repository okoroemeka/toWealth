import React from 'react';

import './index.scss';

const ButtonContent = (props) => {
  return (
    <div className={`button__content__wrapper ${props?.className || ''}`}>
      <span>{props?.buttonName}</span>
      <div className={`floating__button__icon ${props?.extraClassName || ''}`}>
        {props?.children}
      </div>
    </div>
  );
};

export default ButtonContent;
