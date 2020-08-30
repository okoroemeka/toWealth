import React from 'react';

import Button from '../../../UI/Button';
import Input from '../../../Reusable/Input';

const EditForm = ({ handleSubmitEdit }) => {
  return (
    <>
      <form onSubmit={handleSubmitEdit}>
        <Input title='Name' inputType='text' />
        <Input title='Position/Occupation' inputType='text' />
        <Input title='Email Address' inputType='email' />
        <Input title='Date of Birth' inputType='date' />
        <Button type='submit' className='update__profile'>
          Update Profile
        </Button>
      </form>
    </>
  );
};

export default EditForm;
