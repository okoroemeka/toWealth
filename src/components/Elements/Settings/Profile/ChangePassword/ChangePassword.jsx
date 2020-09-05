import React, { useState } from 'react';

import Button from '../../../../UI/Button';
import Input from '../../../../Reusable/Input';
import eyeIcon from '../../../../../assets/images/eye.svg';
import './changepassword.scss';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConfirmPassword, setShowConfirmNewPassword] = useState(false);

  const handleShowPassword = (event) => {
    const {
      target: { id },
    } = event;

    if (id == 'oldPassword') {
      setShowOldPassword(!showOldPassword);
    }
    if (id == 'newPassword') {
      setShowNewPassword(!showNewPassword);
    }
    if (id == 'confirmPassword') {
      setShowConfirmNewPassword(!showNewConfirmPassword);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='change__password__input__wrapper'>
          <Input
            value={oldPassword}
            handleChange={(e) => setOldPassword(e.target.value)}
            title='Old Password'
            inputType={showOldPassword ? 'text' : 'password'}
          />
          <img
            id='oldPassword'
            src={eyeIcon}
            alt='view password'
            className='view__password__icon'
            onClick={handleShowPassword}
          />
        </div>
        <div className='change__password__input__wrapper'>
          <Input
            value={newPassword}
            handleChange={(e) => setNewPassword(e.target.value)}
            title='New Password'
            inputType={showNewPassword ? 'text' : 'password'}
          />
          <img
            id='newPassword'
            src={eyeIcon}
            alt='view password'
            className='view__password__icon'
            onClick={handleShowPassword}
          />
        </div>
        <div className='change__password__input__wrapper'>
          <Input
            value={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
            title='Confirm New Password'
            inputType={showNewConfirmPassword ? 'text' : 'password'}
          />
          <img
            id='confirmPassword'
            src={eyeIcon}
            alt='view password'
            className='view__password__icon'
            onClick={handleShowPassword}
          />
        </div>
        <Button type='submit' className='update__profile'>
          Update Password
        </Button>
      </form>
    </>
  );
};

export default ChangePassword;
