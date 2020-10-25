import React, { useState, useRef,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from '@reach/router';

import * as displayMode from '../../../store/actions/displayMode';
import logout from '../../../store/actions/logout';
import TopNav from "../Navs/TopNav/TopNav";
import SideNav from "../Navs/SideNav/SideNav";
import { getUser } from "../../../store/actions/user";
import './dashboard.scss';

const Dashboard = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [sideNavItemName, setSideNavItemName] = useState('userDashBoard');
  const topNavRef = useRef(null);
  const dispatch = useDispatch();


  const {
    darkMode: { darkMode },
    authLogin,
    signup,
  } = useSelector((state) => state);

  const fullname = authLogin?.data?.fullname?.split(' ').map(name=>name[0].toUpperCase() + name.slice(1)).join(' ');

  const handleDisplayDarkMode = () => {
    dispatch(displayMode.darkMode(true));
  };

  const handleDisplayLightMode = () => {
    dispatch(displayMode.lightMode(false));
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowModal(false);
  };

  useEffect(() => {
      if (showModal) {
        topNavRef.current.focus();
      }
  }, [showModal]);
  useEffect(() => {
    async function user() {
      await dispatch(getUser())
    }
    user();
  }, [dispatch])

  if (!authLogin.isLoggedIn && !signup.isLoggedIn) return <Redirect noThrow to='/' />;

  return (
    <div className='dashboard__wrapper'>
      <TopNav
        userImage={authLogin?.data?.image}
        authLogin={authLogin}
        fullname={fullname}
        showModal={showModal}
        setShowModal={setShowModal}
        topNavRef={topNavRef}
        handleDisplayDarkMode={handleDisplayDarkMode}
        handleDisplayLightMode={handleDisplayLightMode}
        handleLogout={handleLogout}
      />
      <main>
        <div className='row dashboard__body'>
          <SideNav
            darkMode={darkMode}
            userImage={authLogin?.data?.image}
            fullname={fullname}
            setSideNavItemName={setSideNavItemName}
            position={authLogin?.data?.position}
          />
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
