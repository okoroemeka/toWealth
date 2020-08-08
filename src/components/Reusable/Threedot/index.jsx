import React from 'react';

import './dots.scss';

const ThreeDotsButton = ({
  handleClick = () => null,
  children,
  displayMore,
}) => {
  return (
    <div className='more__button__wrapper' onClick={handleClick}>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      {displayMore ? <div className='action__wrapper'>{children}</div> : ''}
    </div>
  );
};

export default ThreeDotsButton;
