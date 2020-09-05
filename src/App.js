import React from 'react';
import { Router } from '@reach/router';

import Auth from './components/Pages/Authentication';
import Dashboard from './components/Elements/Dashboard';
import UserDashboard from './components/Elements/Dashboard/UserDashboard';
import Goals from './components/Elements/Dashboard/Goals';
import BudgetDashboard from './components/Elements/Dashboard/BudgetDashboard';
import Savings from './components/Elements/Dashboard/Savings';
import Transactions from './components/Elements/Dashboard/Transactions';
import Networth from './components/Elements/Dashboard/Networth';
import Profile from './components/Elements/Settings/Profile';
import GeneralSettings from './components/Elements/Settings/GeneralSettings';

function App() {
  return (
    <div className='container'>
      <Router>
        <Auth path='/' />
        <Dashboard path='dashboard'>
          <UserDashboard path='/dashboard' />
          <Goals path='goals' />
          <BudgetDashboard path='budget' />
          <Savings path='savings' />
          <Transactions path='transaction' />
          <Networth path='/networth' />
          <Profile path='/profile' />
          <GeneralSettings path='/settings' />
        </Dashboard>
      </Router>
    </div>
  );
}

export default App;
