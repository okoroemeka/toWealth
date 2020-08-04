import React from 'react';
import Caret from '../../UI/Icons/Caret';
import './tableHead.scss';

const Table = (props) => {
  const {
    firstTitle,
    secondTitle,
    headerWrapperClassName,
    toggleCaret,
    handleShowTable,
  } = props;
  return (
    <div className={`table__custom_header ${headerWrapperClassName || ''}`}>
      <h5 className='table__custom_header__title'>{firstTitle || 'Income'}</h5>
      <Caret
        handleClick={handleShowTable}
        fill='#00fdff'
        className={`table__custom_header__caret ${
          toggleCaret ? 'toggle__caret' : ''
        }`}
      />
      <h5 className='income__amount'>{`$ ${secondTitle || '23,568.00'}`}</h5>
    </div>
  );
};

export default Table;
