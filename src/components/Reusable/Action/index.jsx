import React from 'react';

import './action.scss';

const Action = ({
  iconImageUrl,
  actionName,
  handleActionClick = () => null,
}) => {
  return (
    <div className='action' onClick={handleActionClick}>
      <img src={iconImageUrl} alt='icon' className='action__image' />
      <h5 className='action__name'>{actionName}</h5>
    </div>
  );
};

export default Action;
