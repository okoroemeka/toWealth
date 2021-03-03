import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '../../../../UI/Button';
import Input from '../../../../Reusable/Input';
import { passwordValidator } from '../../../../../utils/Validation';
import eyeIcon from '../../../../../assets/images/eye.svg';
import { changePassword } from "../../../../../store/actions/user";
import InputError from "../../../../Reusable/Error/InputError";
import Error from "../../../../Reusable/Error";

import './changepassword.scss';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConfirmPassword, setShowConfirmNewPassword] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const handleShowPassword = (event) => {
    const {
      target: { id },
    } = event;

    if (id === 'oldPassword') {
      setShowOldPassword(!showOldPassword);
    }
    if (id === 'newPassword') {
      setShowNewPassword(!showNewPassword);
    }
    if (id === 'confirmPassword') {
      setShowConfirmNewPassword(!showNewConfirmPassword);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage(null)
      setLoading(true);
      await dispatch(changePassword({ oldPassword, newPassword, confirmPassword }))
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch ({ response: { data: { status, message } } }) {
      setErrorMessage(status === 'Fail' ? message : 'An error occured')
    }
    setLoading(false)
  };

  useEffect(() => {
    if (passwordValidator(newPassword) && newPassword === confirmPassword) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [newPassword, confirmPassword]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errorMessage ? <Error errorMessage={errorMessage} width="100%" /> : null}
        <div className='change__password__input__wrapper'>
          <Input
            value={oldPassword}
            required
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
            required
            title='New Password'
            name='newPassword'
            handleBlur={() => setPasswordTouched(true)}
            handleChange={(e) => setNewPassword(e.target.value)}
            inputType={showNewPassword ? 'text' : 'password'}
          />
          <img
            id='newPassword'
            src={eyeIcon}
            alt='view password'
            className='view__password__icon'
            onClick={handleShowPassword}
          />
          {!passwordValidator(newPassword) && passwordTouched ? (
            <InputError errorText="password must be between 8 and 15 characters, alhanumeric and have
              a special charecter"/>
          ) : null}
        </div>
        <div className='change__password__input__wrapper'>
          <Input
            value={confirmPassword}
            required
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
        <Button type='submit' className='update__profile' disabled={loading || !validForm}>
          {loading ? <CircularProgress color='#ffffff' size={16} /> : 'Update Password'}
        </Button>
      </form>
    </>
  );
};

export default ChangePassword;
