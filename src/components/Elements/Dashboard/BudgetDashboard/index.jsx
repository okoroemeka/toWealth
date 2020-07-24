import React from 'react';

import DashboardWrapper from '../../../Reuable/DashboardWrapper';
import Button from '../../../UI/Button';
import BudgetCard from '../../../Reuable/BudgetCard';
import WorthCard from '../../../Reuable/WorthCard';
import WalletIcon from '../../../UI/Icons/Wallet';
import ForwardIcon from '../../../UI/Icons/Forward';
import BackwardIcon from '../../../UI/Icons/BackwardIcon';

import Table from './Table';

import './budget.scss';

const BudgetDashboard = (props) => {
  return (
    <DashboardWrapper>
      <div className='budget__details'>
        <div className='row'>
          <div className='col-l-8 top__buttons'>
            <div className='month__picker'>
              <BackwardIcon className='decrease__date' />
              <h5 className='selected__month'>february 2020</h5>
              <ForwardIcon className='increase__date' />
            </div>
            <Button type='submit' className='add__newbudget'>
              + new budget
            </Button>
          </div>
        </div>
        <div className='row chart__area'>
          <Table />
          <div className='col-l-4 budget__chart__wrapper'>
            <BudgetCard className='budget__chart' charTitle='monthly income' />
            <BudgetCard
              className='budget__chart'
              charTitle='monthly expenses'
            />

            <WorthCard
              className='personal__savings'
              cardTitle='personal savings'
              iconButtonClassName='wallet__icon__wrapper'
              iconClassName='wallet_icon'
              Icon={WalletIcon}
            />
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default BudgetDashboard;
