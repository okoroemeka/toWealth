import React from 'react';

import './dropdown.scss';

const DropDown = ({ className, children, refName, handleBlur }) => {
  return (
    <div className='wrapper'>
      <div
        ref={refName}
        className={`top__menu__content ${className}`}
        onBlur={handleBlur}
        tabIndex={0}
      >
        <div className='triangle'></div>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
