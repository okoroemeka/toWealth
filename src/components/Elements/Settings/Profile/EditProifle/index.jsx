import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '../../../../UI/Button';
import Input from '../../../../Reusable/Input';
import { updateUser } from "../../../../../store/actions/user";

const EditForm = ({userData, imageUrl}) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmitEdit = async (event) => {
    event.preventDefault();

    const userDetails = {
      imageUrl,
      email,
      fullname: name,
      occupation: position,
      birthday:date
    }

    try {
      setLoading(true)
      const res = await dispatch(updateUser(userDetails));
      console.log(res)
    } catch (error) {
      console.log('error :>> ', error);
    }
    setLoading(false)
  };

  useEffect(() => {
    setName(userData?.fullname||'')
    setPosition(userData?.position || '')
    setEmail(userData?.email || '')
    setDate(userData?.birthday?.split('T')[0]||'')
  }, [userData]);

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
        <Button type='submit' className='update__profile' disabled={loading}>
          {loading ? <CircularProgress color='#ffffff' size={16}/> : 'Update Profile'}
        </Button>
      </form>
    </>
  );
};

export default EditForm;
