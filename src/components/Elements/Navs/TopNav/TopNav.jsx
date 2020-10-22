import React from 'react';

import logo from '../../../../assets/images/logo.svg';
import userAvatar from '../../../../assets/images/userAvatar.svg';
import notifications from '../../../../assets/images/notifications.svg';
import DrawerIcon from '../../../UI/DrawerIcon';
import DropDown from '../../../Reusable/Dropdown/DropDown';
import DropDownNavItems from '../DropDownNavItems/DropNavItem';
import Modal from '../../../Reusable/Modal/Modal';
import "./TopNav.scss";

const TopNav = ({userImage, fullname, showModal, setShowModal,topNavRef,handleDisplayDarkMode,handleDisplayLightMode, handleLogout}) => {
    return (
        <header>
          <div className='row dashboar__nav'>
            <div className='col-sm-5 col-l-4 nav__title'>
              <img src={logo} alt='logo' className='nav__logo' />
              <h3 className='company__name'>toWealth</h3>
            </div>
            <div className='col-sm-7 col-l-2 notificaton__area'>
              <div className='user__averta__area'>
                <div className='user__image__wrapper'>
                  <img src={userImage||userAvatar} alt='user' className='user__image' />
                </div>
                <h5 className='user__name'>{fullname?.split(' ')[0]}</h5>
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
                      handleLogout={handleLogout}
                    />
                  </DropDown>
                </Modal>
              )}
            </div>
          </div>
      </header>
     );
}

export default TopNav;