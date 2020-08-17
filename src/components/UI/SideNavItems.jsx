import React from 'react';
import { Link } from '@reach/router';

import Dashboard from './Icons/Dashboard';
import BudgetIcon from './Icons/BudgetIcon';
import Savings from './Icons/Savings';
import Goal from './Icons/Goal';
import NetWorth from './Icons/Networth';
import Transaction from './Icons/Transaction';

const dashboardData = [
  {
    id: 1,
    name: 'Dashboard',
    icon: Dashboard,
  },
  {
    id: 2,
    name: 'Transaction',
    icon: Transaction,
  },
  {
    id: 3,
    name: 'Net Worth',
    icon: NetWorth,
  },
  {
    id: 4,
    name: 'Budget',
    icon: BudgetIcon,
  },
  {
    id: 5,
    name: 'Savings',
    icon: Savings,
  },
  {
    id: 6,
    name: 'Goals',
    icon: Goal,
  },
];

const SideNav = ({ handleSideNavItemClicked }) => {
  const pathName = window.location.pathname.split('/')[2];

  return dashboardData.map(({ id, name, icon: Icon }) => (
    <Link
      className={`nav__item ${
        name.replace(' ', '').toLowerCase() == pathName
          ? 'nav__item__active'
          : ''
      }`}
      key={id}
      to={`/dashboard/${name.replace(' ', '').toLowerCase()}`}
    >
      <Icon
        fill={
          name.replace(' ', '').toLowerCase() == pathName
            ? '#000000'
            : '#75BF72'
        }
        className='sidenav__item__icon'
      />
      <h6 className='nav__item__name'>{name}</h6>
    </Link>
  ));
};

export default SideNav;
