import React from 'react';

import Calendar from '../../../Reusable/Calendar';
import WorthCard from '../../../Reusable/WorthCard';
import SavingsIcon from '../../../UI/Icons/Savings';

import './Savings.scss';
const Savings = (props) => {
  return (
    <div className='savings'>
      <div className='col-l-11'>
        <div className='row calender__wrapper'>
          <div className='col-l-4 '>
            <Calendar />
          </div>
        </div>
        <div className='row savings__details__area'>
          <div className='col-l-8'></div>
          <div className='col-l-3 savings__details__card'>
            <WorthCard
              cardTitle='MY SAVINGS'
              className='savigns__card'
              amountToDisPlay='2,0050'
              iconClassName='savings__icon'
              Icon={SavingsIcon}
              iconColor='#000000'
            />
          </div>
        </div>
      </div>
      <div className='floating__action'></div>
    </div>
  );
};

export default Savings;
