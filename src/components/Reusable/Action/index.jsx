import React from 'react';

import './action.scss';

const Action = ({
  iconImageUrl,
  actionName,
  displayIcon = true,
  handleActionClick = () => null,
}) => {
  return (
    <div className='action' onClick={handleActionClick}>
      {displayIcon && (
        <img src={iconImageUrl} alt='icon' className='action__image' />
      )}
      <h5 className={`action__name ${!displayIcon ? 'action__name__alt' : ''}`}>
        {actionName}
      </h5>
    </div>
  );
};

export default Action;
