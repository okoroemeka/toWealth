import React from 'react';

import GeneralSettingsSub from './GeneralSettingsSub';
import NetWorthSttings from './NetWorthSttings';
import './generalSettings.scss';

const GeneralSettings = (props) => {
  return (
    <div className='general__settings'>
      <div className='col-l-10'>
        <div className='general__settings__area'>
          <h4 className='header'>General Settings</h4>
          <div className='form__wrapper'>
            <GeneralSettingsSub />
          </div>
        </div>
        <div className='networth__settings__area'>
          <h4 className='header'>Networth Settings</h4>
          <div className='form__wrapper'>
            <NetWorthSttings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
