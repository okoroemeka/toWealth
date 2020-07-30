import React from 'react';
import Calendar from '../../../Reusable/Calendar';

import './Savings.scss';
const Savings = (props) => {
  return (
    <div className='savings'>
      <div className='col-l-10'>
        <div className='row calender__wrapper'>
          <div className='col-l-4 '>
            <Calendar />
          </div>
        </div>
        <div className='row'>
          <div className='col-l-8'></div>
          <div className='col-l-3 '></div>
        </div>
      </div>
      <div className='floating__action'></div>
    </div>
  );
};

export default Savings;
