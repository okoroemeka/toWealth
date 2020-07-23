import React from 'react';

import Button from '../../../UI/Button';
import RoundButton from '../../../UI/RoundButton';

const UserDashboardButton = ({
  buttonName,
  backgroundColor,
  imgUrl,
  handleClick = () => null,
}) => {
  return (
    <Button className='button' onClick={handleClick}>
      <div className='btn__content'>
        <h6 className='btn__text'>{buttonName}</h6>
        <RoundButton className='btn__round' color={backgroundColor}>
          <img src={imgUrl} alt='icon' />
        </RoundButton>
      </div>
    </Button>
  );
};

export default UserDashboardButton;
