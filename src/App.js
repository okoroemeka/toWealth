import React from 'react';
import { Router } from '@reach/router';
import Auth from './components/Pages/Auth';
import Dashboard from './components/Elements/Dashboard';

import UserDashboard from './components/Elements/Dashboard/UserDashboard';
import Goals from './components/Elements/Dashboard/Goals';
import BudgetDashboard from './components/Elements/Dashboard/BudgetDashboard';
import Savings from './components/Elements/Dashboard/Savings';

function App() {
  return (
    <div className='container'>
      <Router>
        <Auth path='/' />
        <Dashboard path='dashboard'>
          <UserDashboard path='/home' />
          <Goals path='goals' />
          <BudgetDashboard path='budget' />
          <Savings path='savings' />
        </Dashboard>
      </Router>
    </div>
  );
}

export default App;
