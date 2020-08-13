import React from 'react';
import './info.scss';

const InfoItem = ({ title, amount, backgroundColor, children }) => {
  return (
    <div className='info__item'>
      <div className='item__detail__area'>
        <h5 className='item__title'>{title}</h5>
        <h5 className='item__amount'>${amount}</h5>
      </div>
      <div
        className='icon__container'
        style={{ backgroundColor: backgroundColor }}
      >
        {children}
      </div>
    </div>
  );
};

export default InfoItem;
