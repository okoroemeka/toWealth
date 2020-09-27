import React from 'react';

import Card from './Card';
import './Styles/CardRemade.scss';

const CardRemade = ({
  cardTitle = '',
  cardBody,
  cardRef,
  actions = '',
  handleCloseCard = () => null,
}) => {
  return (
    <Card classname='col-l-4 card__remade'>
      <h4 className='card__title'>{cardTitle}</h4>
      <span className='cancle__button' onClick={handleCloseCard}>
        x
      </span>
      <p className='card__body'>
        {cardBody || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      </p>
      <div className='actions__container'>{actions}</div>
    </Card>
  );
};

export default CardRemade;
