import React from 'react';

import Dashboard from './Icons/Dashboard';
import BudgetIcon from './Icons/BudgetIcon';
import Savings from './Icons/Savings';
import Goal from './Icons/Goal';
import NetWorth from './Icons/Networth';
import Transaction from './Icons/Transaction';
import Support from './Icons/Support';
import TermsIcon from './Icons/TermsIcon';
import HowToIcon from './Icons/HowToIcon';

const dashboardData = [
  {
    id: 1,
    name: 'Dasboard',
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
  const [navId, setNavId] = React.useState(1);

  const handleNavitemClicked = (itemName, id) => {
    setNavId(id);
    return handleSideNavItemClicked(itemName);
  };

  return dashboardData.map(({ id, name, icon: Icon }) => (
    <div
      className={`nav__item ${
        navId != 0 && navId == id ? 'nav__item__active' : ''
      }`}
      onClick={() => handleNavitemClicked(name, id)}
      key={id}
    >
      <Icon
        fill={navId != 0 && navId == id ? '#000000' : '#75BF72'}
        className='sidenav__item__icon'
      />
      <h6 className='nav__item__name'>{name}</h6>
    </div>
  ));
};

export default SideNav;
