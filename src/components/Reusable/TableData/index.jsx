import React from 'react';

import Threedot from '../Threedot';
import './tableData.scss';

const TableData = (props) => {
  const { dataTitle, amount, handleClickMore, displayMore } = props;
  return (
    <div className='body__data'>
      <Threedot handleClick={handleClickMore} displayMore={displayMore} />
      <h5 className='data'>{dataTitle || 'wages/salary'}</h5>
      <h5 className='data__amount'>{`$ ${amount || '200.00'}`}</h5>
    </div>
  );
};

export default TableData;
