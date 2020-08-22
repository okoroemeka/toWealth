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
        </Dashboard>
      </Router>
    </div>
  );
}

export default App;
