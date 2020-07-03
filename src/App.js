import React from 'react';
import { Router } from '@reach/router';
import Auth from './components/Pages/Auth';
import Dashboard from './components/Pages/Dashboard';

function App() {
  return (
    <div className='container'>
      <Router>
        <Auth path='/' />
        <Dashboard path='/dashboard' />
      </Router>
    </div>
  );
}

export default App;
