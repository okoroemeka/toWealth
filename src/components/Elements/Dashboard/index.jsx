import React from 'react';

import logo from '../../../assets/images/logo.svg';
import notifications from '../../../assets/images/notifications.svg';
import DrawerIcon from '../../UI/DrawerIcon';

import './dashboard.scss';

const Dashboard = (props) => {
  return (
    <div className='dashboard__wrapper'>
      <header>
        <div className='row dashboar__nav'>
          <div className='col-sm-5 col-l-4 nav__title'>
            <img src={logo} alt='logo' className='nav__logo' />
            <h3 className='company__name'>toWealth</h3>
          </div>
          <div className='col-sm-7 col-l-2 notificaton__area'>
            <div className='user__averta__area'>
              <div className='user__image__wrapper'></div>
              <h5 className='user__name'>Amaka</h5>
            </div>
            <span className='notifications__wrapper'>
              <img
                src={notifications}
                alt='notifications'
                className='notification'
              />
            </span>
            <DrawerIcon />
          </div>
        </div>
      </header>
      <main>
        <div className='row dashboard__body'>
          <div className='col-sm-12 col-l-2 side__nav'></div>
          <div className='col-sm-12 col-l-10 main__content'></div>
        </div>
      </main>
      <footer>
        <div className='row'>
          <div className='col-l-10 footer__content'></div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;