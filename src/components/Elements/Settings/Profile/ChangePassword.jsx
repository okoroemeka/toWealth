import React from 'react';

import Button from '../../../UI/Button';
import Input from '../../../Reusable/Input';

const ChangePassword = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input title='Old Password' inputType='password' />
        <Input title='New Password' inputType='password' />
        <Input title='Confirm New Password' inputType='password' />
        <Button type='submit' className='update__profile'>
          Update Password
        </Button>
      </form>
    </>
  );
};

export default ChangePassword;
