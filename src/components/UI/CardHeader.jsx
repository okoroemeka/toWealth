import React, { Fragment } from 'react';

const CardHeader = (props) => {
  const { handleCancel, cardTitle, className = '' } = props;
  return (
    <Fragment>
      <div className={`cancel__button ${className}`} onClick={handleCancel}>
        <h5 className='times'>&times;</h5>
      </div>
      <h5 className='card__title'>{cardTitle}</h5>
    </Fragment>
  );
};

export default CardHeader;
