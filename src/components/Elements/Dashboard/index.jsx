import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../../assets/images/logo.svg';
import notifications from '../../../assets/images/notifications.svg';
import DrawerIcon from '../../UI/DrawerIcon';
import SideNavItems from '../../UI/SideNavItems';
import supportIcon from '../../../assets/images/surport.svg';
import termsOfUse from '../../../assets/images/terms.svg';
import howtos from '../../../assets/images/howto.svg';
import black from '../../../assets/images/black.jpg';
import DropDown from '../../Reusable/Dropdown/DropDown';
import DropDownNavItems from './DropDownNavItems/DropNavItem';
import * as displayMode from '../../../store/actions/displayMode';

import Modal from '../../Reusable/Modal/Modal';

import './dashboard.scss';

const Dashboard = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [sideNavItemName, setSideNavItemName] = useState('userDashBoard');
  const topNavRef = useRef(null);
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.darkMode);

  React.useEffect(() => {
    if (showModal) {
      topNavRef.current.focus();
    }
  }, [showModal]);

  const handleDisplayDarkMode = () => {
    dispatch(displayMode.darkMode(true));
  };

  const handleDisplayLightMode = () => {
    dispatch(displayMode.lightMode(false));
  };

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
              <div className='user__image__wrapper'>
                <img src={black} alt='user' className='user__image' />
              </div>
              <h5 className='user__name'>Amaka</h5>
            </div>
            <span className='notifications__wrapper'>
              <img
                src={notifications}
                alt='notifications'
                className='notification'
              />
            </span>
            <DrawerIcon handleClick={() => setShowModal(!showModal)} />
            {showModal && (
              <Modal>
                <DropDown
                  refName={topNavRef}
                  handleBlur={() => {
                    setShowModal(!showModal);
                  }}
                >
                  <DropDownNavItems
                    handleDarkMode={handleDisplayDarkMode}
                    handleLightMode={handleDisplayLightMode}
                  />
                </DropDown>
              </Modal>
            )}
          </div>
        </div>
      </header>
      <main>
        <div className='row dashboard__body'>
          <div
            className={`col-sm-12 col-l-2 side__nav ${
              darkMode && 'sidenav__darkmode'
            }`}
          >
            <div className='row user__details__wrapper'>
              <div className='col-l-11 user__details'>
                <div className='sidenav__userimage__wrapper'>
                  <img
                    src={black}
                    alt='user'
                    className='user__sidenav__image'
                  />
                </div>
                <h5 className='sidenav__user__name'>Chinwe Ezenwa-Onuaku</h5>
                <h6 className='side__nav__user__position'>
                  Executive Director
                </h6>
              </div>
              <div className='col-l-12 nav__items__wrapper'>
                <div className='nav__items__conatainer'>
                  <SideNavItems handleSideNavItemClicked={setSideNavItemName} />
                </div>
                <div className='nav__items__conatainer settings'>
                  <div className='nav__item'>
                    <img
                      src={supportIcon}
                      alt='dashboard icon'
                      className='sidenav__item__icon'
                    />
                    <h6 className='nav__item__name'>support</h6>
                  </div>
                  <div className='nav__item'>
                    <img
                      src={howtos}
                      alt='dashboard icon'
                      className='sidenav__item__icon'
                    />
                    <h6 className='nav__item__name'>How tos</h6>
                  </div>
                  <div className='nav__item'>
                    <img
                      src={termsOfUse}
                      alt='dashboard icon'
                      className='sidenav__item__icon terms__icon'
                    />
                    <h6 className='nav__item__name'>Terms of use</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-sm-12 col-l-10 main__content ${
              darkMode && 'dark__mode'
            }`}
          >
            {children}
          </div>
        </div>
      </main>
      <footer className={`${darkMode && 'dark__mode__footer'}`}>
        <div className='row'>
          <div className='col-l-10 footer__content'>
            <h6>© WealthyGen Inc. 2020</h6>
            <h6 className='all__right'>All rights reserved</h6>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
