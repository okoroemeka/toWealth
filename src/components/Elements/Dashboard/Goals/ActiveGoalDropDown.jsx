import React from 'react';

import caratIcon from '../../../../assets/images/carat.svg';

const ActiveGoalsDropDown = ({
  currentItem = [],
  handleShowDropDown = () => null,
  showDropdown,
  handleSelectItem = () => null,
}) => {
  return (
    <div className='dropdown__container'>
      <button type='button' onClick={handleShowDropDown}>
        {currentItem[0]}
        <img src={caratIcon} alt='carat' className='carat__icon' />
      </button>
      <ul
        className={`dropdown__items ${
          showDropdown ? 'toggle__dropdown' : null
        }`}
      >
        {currentItem.map((item, index) => {
          if (item != currentItem[0]) {
            return (
              <li key={index} onClick={handleSelectItem}>
                {item}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ActiveGoalsDropDown;
