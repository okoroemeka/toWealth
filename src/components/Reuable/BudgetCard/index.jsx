import React from 'react';

import RoundButton from '../../UI/RoundButton';
import Chart from '../../UI/Chart';

import './budgetCard.scss';

const UserDashboardCard = (props) => {
  const {
    chartData,
    arrowIcon,
    chartTitle,
    className,
    iconButtonColor,
    budgetAmount,
    actualAmount,
    displayTopIcon,
    charTitle,
  } = props;
  return (
    <div className={`chart ${className}`}>
      {charTitle && <h6 className='chart__header'>{charTitle}</h6>}
      <div className='chart__breakdown'>
        <div className='budget'>
          <RoundButton
            width={10}
            height={10}
            borderRadius={5}
            color='#0073F7'
          />
          <h6>BUDGET</h6> <h6>{`$${budgetAmount || '9,114.00'}`}</h6>
        </div>
        <div className='actual'>
          <RoundButton
            width={10}
            height={10}
            borderRadius={5}
            color='#FFA500'
          />
          <h6>ACTUAL</h6> <h6>{`$${actualAmount || '3,114.00'}`}</h6>
        </div>
      </div>
      <div className='chart__container'>
        <div className='chart__title'>{chartTitle}</div>
        <Chart />
      </div>
      {displayTopIcon && (
        <div className='chart__income__icon'>
          <RoundButton
            className='top__icon__container'
            width={40}
            height={40}
            borderRadius={20}
            color={iconButtonColor}
          >
            <div className='top__icon__wrapper'>
              <img src={arrowIcon} alt='income' className='income__image' />
            </div>
          </RoundButton>
        </div>
      )}
    </div>
  );
};

export default UserDashboardCard;
