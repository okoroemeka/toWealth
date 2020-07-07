import React from 'react';

import Card from '../../../UI/Card';
import plusIcon from '../../../../assets/images/plus.svg';
import deleteIcon from '../../../../assets/images/deleteIcon.svg';
import markIcon from '../../../../assets/images/markIcon.svg';
import moreIcon from '../../../../assets/images/moreIcon.svg';
import pauseIcon from '../../../../assets/images/pauseIcon.svg';
import penIcon from '../../../../assets/images/penIcon.svg';
import GoalCard from '../../../UI/GoalCard';

import './Goals.scss';

const Goals = (props) => {
  return (
    <div className='row body'>
      <div className='col-l-12 dropdown__navigation__area'></div>
      <div className='row main__content__area'>
        <Card classname='add__goals__card'>
          <button type='submit' className='add__goal__button'>
            <img src={plusIcon} alt='plus icon' className='plus__icon' />
            <h5>New Goal</h5>
          </button>
        </Card>
        <GoalCard
          goal='New Car'
          deadLine='Sep 30, 2020'
          rate='4.00%'
          progress='5%'
          targetFraction='$200,000.00/$500,000.00'
        />
        <GoalCard
          goal='New Car'
          deadLine='Sep 30, 2020'
          rate='4.00%'
          progress='5%'
          targetFraction='$200,000.00/$500,000.00'
        />
      </div>
    </div>
  );
};

export default Goals;
