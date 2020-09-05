import React, { useState } from 'react';

import Button from '../../../../UI/Button';
import Input from '../../../../Reusable/Input';

const EditForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmitEdit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmitEdit}>
        <Input
          title='Name'
          inputType='text'
          value={name}
          handleChange={(event) => setName(event.target.value)}
        />
        <Input
          title='Position/Occupation'
          inputType='text'
          value={position}
          handleChange={(event) => setPosition(event.target.value)}
        />
        <Input
          title='Email Address'
          inputType='email'
          value={email}
          handleChange={(event) => setEmail(event.target.value)}
        />
        <Input
          title='Date of Birth'
          inputType='date'
          value={date}
          handleChange={(event) => setDate(event.target.value)}
        />
        <Button type='submit' className='update__profile'>
          Update Profile
        </Button>
      </form>
    </>
  );
};

export default EditForm;
