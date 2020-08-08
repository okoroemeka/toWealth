import React from 'react';

import Threedot from '../Threedot';
import Action from '../../Reusable/Action';
import editIconImage from '../../../assets/images/editIcon.svg';
import deleteIcon from '../../../assets/images/deleteIcon1.svg';
import './tableData.scss';

const TableData = (props) => {
  const { dataTitle, amount, handleClickMore, displayMore } = props;
  return (
    <div className='body__data'>
      <Threedot handleClick={handleClickMore} displayMore={displayMore}>
        <Action iconImageUrl={editIconImage} actionName='Edit' />
        <Action iconImageUrl={deleteIcon} actionName='Delete' />
      </Threedot>
      <h5 className='data'>{dataTitle || 'wages/salary'}</h5>
      <h5 className='data__amount'>{`$ ${amount || '200.00'}`}</h5>
    </div>
  );
};

export default TableData;
