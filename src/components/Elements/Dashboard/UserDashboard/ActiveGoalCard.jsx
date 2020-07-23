import React from 'react';

import Card from '../../../UI/Card';
import activeGoal from '../../../../assets/images/activeGoal.svg';

const ActiveGoalCard = ({ goal, percent, fraction, progressWidth }) => (
  <Card classname='active__goal__card'>
    <div className='active__goal__details'>
      <div className='details'>
        <h6 className='my__savings'>{goal || 'MY TRIP TO LAS VEGAS'}</h6>
        <p className='amount'> {percent || '75.5%'}</p>
      </div>
      <div className='icon'>
        <div className='icon__wrapper'>
          <img src={activeGoal} alt='icon' className='active__goal__icon' />
        </div>
      </div>
    </div>
    <div className='progress__bar__shadow'>
      <div
        className='progress__bar'
        style={{ width: progressWidth || '50%' }}
      ></div>
    </div>
    <h6 className='fraction'>{fraction || '$9,060.00/$12,000.00'}</h6>
  </Card>
);

export default ActiveGoalCard;
