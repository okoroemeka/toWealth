import React from 'react';
import TableData from './TableData';

import './table.scss';

const Table = (props) => {
  return (
    <div className='col-l-8 table'>
      <div className='row table__header'>
        <div className='col-l-3 category'>category</div>
        <div className='col-l-1 budget'> budget</div>
        <div className='col-l-1 actual'>actual</div>
        <div className='col-l-1 remaining'>Remaining</div>
        <div className='col-l-4 '></div>
      </div>
      <div className='table__body'>
        <TableData />
        <TableData />
        <TableData />
      </div>
    </div>
  );
};

export default Table;
