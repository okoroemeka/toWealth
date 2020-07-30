import React from 'react';

import Calendar from '../../../Reusable/Calendar';
import WorthCard from '../../../Reusable/WorthCard';
import SavingsIcon from '../../../UI/Icons/Savings';
import Caret from '../../../UI/Icons/Caret';
import FloatingButton from '../../../Reusable/FloatingButton';

import './Savings.scss';
const Savings = (props) => {
  return (
    <div className='savings'>
      <div className='col-l-10'>
        <div className='row calender__wrapper'>
          <div className='col-l-4 '>
            <Calendar />
          </div>
        </div>
        <div className='row savings__details__area'>
          <div className='col-l-8 table'>
            <div className='table__wrapper'>
              <div className='table__header'>
                <h5 className='table__header__title'>Income</h5>
                <Caret fill='#00fdff' className='table__header__caret' />
                <h5 className='income__amount'>{`$ ${
                  props.incomeAmount || '23,568.00'
                }`}</h5>
              </div>
              <div className='table__body'>
                <div className='body__data'>
                  <h5 className='data'>wages/salary</h5>
                  <h5 className='data__amount'>$200.00</h5>
                </div>
              </div>
            </div>
          </div>
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
      <div className='floating__action'>
        <FloatingButton>+</FloatingButton>
      </div>
    </div>
  );
};

export default Savings;
