import React, { useState } from 'react';

import Savings from '../../../UI/Icons/Savings';
import Networth from '../../../UI/Icons/Networth';
import Target from '../../../UI/Icons/Target';
import BudgetCard from '../../../Reuable/BudgetCard';
import WorthCard from '../../../Reuable/WorthCard';
import ActiveGoalCard from './ActiveGoalCard';
import UserDashboardButton from './UserDashboardButton';
import DashboardWrapper from '../../../Reuable/DashboardWrapper';

import incomeArrow from '../../../../assets/images/incomeArrow.svg';
import expensesIcon from '../../../../assets/images/expensesIcon.svg';
import addIcon from '../../../../assets/images/addIcon.svg';
import cancelIcon from '../../../../assets/images/cancelIcon.svg';
import transfer from '../../../../assets/images/transfer.svg';
import assets from '../../../../assets/images/assets.svg';
import liabilities from '../../../../assets/images/liabilities.svg';
import goals from '../../../../assets/images/goals.svg';

import './userDashboard.scss';

const UserDashbord = (props) => {
  const [toggleSideButtons, setToggleSideButtons] = useState(false);
  return (
    <DashboardWrapper>
      <div className='savings__datails'>
        <div className='col-l-9'>
          <div className='row card__wrapper'>
            <WorthCard
              className='savigns__card'
              cardTitle='MY SAVINGS'
              iconClassName='savings__icon'
              Icon={Savings}
              iconColor='#000000'
            />
            <WorthCard
              className='card__networth'
              cardTitle='MY NET WORTH'
              iconButtonClassName='icon__networth'
              iconClassName='savings__icon'
              Icon={Networth}
            />
            <WorthCard
              className='card__target'
              cardTitle='TARGET WORTH'
              iconButtonClassName='icon__target'
              iconClassName='target__icon'
              Icon={Target}
            />
          </div>
          <h5 className='my__budget__header'>My Budget</h5>
          <div className='row'>
            <BudgetCard
              className='col-l-5'
              arrowIcon={incomeArrow}
              iconButtonColor='#47b881'
              chartTitle='INCOME'
              displayTopIcon
            />
            <BudgetCard
              className='col-l-5 expenses__chart'
              arrowIcon={expensesIcon}
              iconButtonColor='#ec4c47'
              chartTitle='EXPENSES'
              displayTopIcon
            />
          </div>
          <h5 className='active__goals__header'>My Active Goals</h5>
          <div className='row active__goal'>
            <div className='col-l-5'>
              <ActiveGoalCard />
            </div>
          </div>
        </div>
        <div className='col-l-3 toggle__button__wrapper'>
          {toggleSideButtons && (
            <div className='buttons__container cls__btns'>
              <UserDashboardButton
                buttonName='Income'
                backgroundColor='#47b881'
                imgUrl={incomeArrow}
              />
              <UserDashboardButton
                buttonName='expenses'
                backgroundColor='#ec4c47'
                imgUrl={expensesIcon}
              />
              <UserDashboardButton
                buttonName='transfer'
                backgroundColor='#51A553'
                imgUrl={transfer}
              />
              <UserDashboardButton
                buttonName='assets'
                backgroundColor='#4B0AA4'
                imgUrl={assets}
              />
              <UserDashboardButton
                buttonName='liabilities'
                backgroundColor='#0073F7'
                imgUrl={liabilities}
              />
              <UserDashboardButton
                buttonName='goals'
                backgroundColor='#1070CA'
                imgUrl={goals}
              />
            </div>
          )}
          <button
            type='button'
            className='toggle__button'
            onClick={() => setToggleSideButtons(!toggleSideButtons)}
          >
            <img src={toggleSideButtons ? cancelIcon : addIcon} alt='icon' />
          </button>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default UserDashbord;
