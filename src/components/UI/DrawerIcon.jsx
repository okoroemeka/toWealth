import React from 'react';

const Drawer = ({ handleClick }) => {
  return (
    <button className='drawer__wrapper' type='button' onClick={handleClick}>
      <div className='top__line'></div>
      <div className='second__line'></div>
      <div className='third__line'></div>
      <div className='last__line'></div>
    </button>
  );
};

export default Drawer;
