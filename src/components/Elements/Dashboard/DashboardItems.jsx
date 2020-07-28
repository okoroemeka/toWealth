import React from 'react';

import UserDashboard from './UserDashboard';
import Goals from './Goals';
import BudgetDashboard from './BudgetDashboard';

const DashboardItems = ({ itemNameToDisplay }) => {
  let ItemToDisplay;
  switch (itemNameToDisplay) {
    case 'Goals':
      ItemToDisplay = <Goals />;
      break;
    case 'Budget':
      ItemToDisplay = <BudgetDashboard />;
      break;
    default:
      ItemToDisplay = <UserDashboard />;
      break;
  }

  return ItemToDisplay;
};

export default DashboardItems;
