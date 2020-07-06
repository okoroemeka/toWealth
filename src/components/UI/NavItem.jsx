import React from 'react';

const NavItem = ({ navItemIcon, navItemName, handleClick }) => {
  return (
    <div className='nav__item' onClick={handleClick}>
      <img
        src={navItemIcon}
        alt='dashboard icon'
        className='sidenav__item__icon'
      />
      <h6 className='nav__item__name'>{navItemName}</h6>
    </div>
  );
};

export default NavItem;
