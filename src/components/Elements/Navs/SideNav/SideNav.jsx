import React from 'react';

import userAvatar from '../../../../assets/images/userAvatar.svg';
import SideNavItems from '../../../UI/SideNavItems';
import supportIcon from '../../../../assets/images/surport.svg';
import termsOfUse from '../../../../assets/images/terms.svg';
import howtos from '../../../../assets/images/howto.svg';
import "./SideNav.scss";

const SideNav = ({ darkMode, userImage, fullname, position, setSideNavItemName}) => {
    return (
        <div
            className={`col-sm-12 col-l-2 side__nav ${
              darkMode && 'sidenav__darkmode'
            }`}
          >
            <div className='row user__details__wrapper'>
              <div className='col-l-11 user__details'>
                <div className='sidenav__userimage__wrapper'>
                  <img
                    src={userImage||userAvatar}
                    alt='user'
                    className='user__sidenav__image'
                  />
                </div>
                <h5 className='sidenav__user__name'>{fullname}</h5>
                <h6 className='side__nav__user__position'>
                  {position}
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
     );
}

export default SideNav;