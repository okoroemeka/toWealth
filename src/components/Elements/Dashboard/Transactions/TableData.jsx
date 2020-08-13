import React from 'react';

import editIconImage from '../../../../assets/images/editIcon.svg';
import deleteIcon from '../../../../assets/images/deleteIcon1.svg';
import './tableData.scss';

const TableData = ({
  imageUrl,
  date,
  description,
  category,
  account,
  amount,
  backgroundColor = 'red',
  handleEditItem = () => null,
  handleDeleteItem = () => null,
}) => {
  return (
    <div className='row table__data'>
      <div className='col-l-1 status'>
        <div
          className='status__icon__wrapper'
          style={{ backgroundColor: backgroundColor }}
        >
          <img src={imageUrl} alt='icon' className='transaction__icon' />
        </div>
      </div>
      <div className='col-l-2 title'>{date}</div>
      <div className='col-l-3 title'>{description}</div>
      <div className='col-l-2 title'>{category}</div>
      <div className='col-l-1 title'>{account}</div>
      <div className='col-l-2 title'>{amount}</div>
      <div className='col-l-1 action__area'>
        <img
          src={editIconImage}
          alt='icon'
          onClick={handleEditItem}
          className='action__items'
        />
        <img
          src={deleteIcon}
          alt='icon'
          onClick={handleDeleteItem}
          className='action__items'
        />
      </div>
    </div>
  );
};

export default TableData;
