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
import Protected from './components/HOC/Protected';

function App() {
  return (
    <div className='container'>
      <Router>
        <Auth path='/' />
        <Dashboard path='dashboard'>
          <Protected path='/dashboard' Component={UserDashboard} />
          <Protected path='/goals' Component={Goals} />
          <Protected path='budget' Component={BudgetDashboard} />
          <Protected path='savings' Component={Savings} />
          <Protected path='transaction' Component={Transactions} />
          <Protected path='/networth' Component={Networth} />
          <Protected path='/profile' Component={Profile} />
          <Protected path='/settings' Component={GeneralSettings} />
        </Dashboard>
      </Router>
    </div>
  );
}

export default App;
