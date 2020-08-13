import React from 'react';

import './tablehead.scss';

const TableHead = (props) => {
  return (
    <div className='row transaction__table__head'>
      <div className='col-l-1 title'>Status</div>
      <div className='col-l-2 title'>Date</div>
      <div className='col-l-3 title'>Description</div>
      <div className='col-l-2 title'>Category</div>
      <div className='col-l-1 title'>Account</div>
      <div className='col-l-2 title'>Amount</div>
      <div className='col-l-1 title'></div>
    </div>
  );
};

export default TableHead;
