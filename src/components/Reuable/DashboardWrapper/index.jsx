import React from 'react';
import './dashboardWrapper.scss';

const DashboardWrapper = ({ children }) => {
  return <div className='row user__dashboard__wrapper'>{children}</div>;
};

export default DashboardWrapper;
