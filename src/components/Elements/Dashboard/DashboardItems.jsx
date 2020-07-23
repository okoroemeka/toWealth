import React from 'react';

import UserDashboard from './UserDashboard';
import Goals from './Goals';

const DashboardItems = ({ itemNameToDisplay }) => {
  let ItemToDisplay;
  if (itemNameToDisplay == 'Goals') {
    ItemToDisplay = <Goals />;
  } else {
    ItemToDisplay = <UserDashboard />;
  }

  return ItemToDisplay;
};

export default DashboardItems;
