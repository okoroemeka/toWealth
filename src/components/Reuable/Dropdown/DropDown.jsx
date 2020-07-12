import React from 'react';

import './dropdown.scss';

const DropDown = ({ className, children }) => {
  return (
    <div className='wrapper'>
      <div className={`top__menu__content ${className}`}>
        <div className='triangle'></div>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
