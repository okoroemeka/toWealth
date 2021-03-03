import React from 'react';

import carat from '../../../assets/images/up-carat.svg';
import Card from '../../UI/Card';
import './worthcard.scss';

const WorthCard = ({
  cardTitle,
  className,
  amountToDisPlay,
  iconButtonClassName = '',
  iconClassName,
  Icon,
  iconColor,
}) => {
  return (
    <Card classname={`card ${className}`}>
      <div className='savings__details'>
        <div className='details'>
          <h6 className='my__savings'>{cardTitle || 'MY NET WORTH'}</h6>
          <p className='amount'> {`$ ${amountToDisPlay || '2,149.00'}`}</p>
        </div>
        <div className='icon'>
          <div className={`icon__wrapper ${iconButtonClassName}`}>
            <Icon fill={iconColor || '#ffffff'} className={iconClassName} />
          </div>
        </div>
      </div>
      {className === 'savigns__card' && (
        <div className='progress__rate'>
          <img src={carat} alt='up carat' className='carat' />
          <div className='percentage'>16%</div>
          <div className='text__percentage'>since last month</div>
        </div>
      )}
    </Card>
  );
};

export default WorthCard;
