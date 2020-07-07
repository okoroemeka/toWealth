import React from 'react';

import Card from '../../../UI/Card';
import plusIcon from '../../../../assets/images/plus.svg';
import './Goals.scss';

const Goals = (props) => {
  return (
    <div className='row body'>
      <div className='col-l-12 dropdown__navigation__area'></div>
      <div className='row main__content__area'>
        <Card classname='col-l-4 add__goals__card'>
          <button type='submit' className='add__goal__button'>
            <img src={plusIcon} alt='plus icon' className='plus__icon' />
            <h5>New Goal</h5>
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Goals;
