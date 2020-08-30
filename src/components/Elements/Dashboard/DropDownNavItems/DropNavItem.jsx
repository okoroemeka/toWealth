import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import Profile from '../../../UI/Icons/Profile';
import LogoutIcon from '../../../UI/Icons/LogoutIcon';
import SettingIcon from '../../../UI/Icons/SettingIcon';
import HowToIcon from '../../../UI/Icons/HowToIcon';
import termsOfUse from '../../../../assets/images/terms.svg';
import black from '../../../../assets/images/black.jpg';
import moon from '../../../../assets/images/moon.svg';
import sun from '../../../../assets/images/sun.svg';
import Line from '../../../UI/Line';
import './DropNavItem.scss';

const DropNavItem = ({ handleDarkMode, handleLightMode, handleLogout }) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  return (
    <Fragment>
      <div className='dropdown__nav__item'>
        <div className='user__details'>
          <div className='user__image__wrapper'>
            <img src={black} alt='user' className='user__image' />
          </div>
          <h5>My Account</h5>
        </div>
        <ul className='nav__item'>
          <li
            className='items__wrapper'
            onClick={() => navigate('/dashboard/settings')}
          >
            <Profile fill='#66788a' />
            <h5>Edit profile</h5>
          </li>
          {!darkMode ? (
            <li className='items__wrapper' onClick={handleDarkMode}>
              <img src={moon} alt='moon' className='moon__icon' />
              <h5>Enable dark mode</h5>
            </li>
          ) : (
            <li className='items__wrapper' onClick={handleLightMode}>
              <img src={sun} alt='moon' className='sun__icon' />
              <h5>Disable dark mode</h5>
            </li>
          )}
          <li className='items__wrapper'>
            <SettingIcon fill='#66788a' />
            <h5>Settings</h5>
          </li>
          <li className='items__wrapper how__tos'>
            <HowToIcon fill='#66788a' />
            <h5 className='howtos__text'>How to's</h5>
          </li>
          <li className='items__wrapper'>
            <img
              src={termsOfUse}
              alt='dashboard icon'
              className='terms__icon'
            />
            <h5 className='terms__text'>Terms of use</h5>
          </li>
          <li className='items__wrapper' onClick={handleLogout}>
            <LogoutIcon fill='#66788a' />
            <h5>Logout</h5>
          </li>
        </ul>
      </div>
      <Line className='line' />
      <div className='app__location__mobile'></div>
    </Fragment>
  );
};

export default DropNavItem;
