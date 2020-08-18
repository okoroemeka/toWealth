import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import eyeIcon from '../../../assets/images/eye.svg';
import './index.scss';
import signup from '../../../store/actions/signup';

const Signup = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await dispatch(signup({ fullname: fullName, email, password }));
      setLoading(false);
      navigate('/dashboard/dashboard');
    } catch (error) {
      setLoading(false);
      setErr(error.message);
    }
  };

  return (
    <div className='signup__form__wrapper'>
      <form className='signup__form' onSubmit={(e) => handleSignup(e)}>
        <input
          type='text'
          value={fullName}
          placeholder='Full name'
          required
          onChange={(event) => setFullName(event.target.value)}
        />
        <input
          type='email'
          value={email}
          placeholder='Email Address'
          required
          onChange={(event) => setEmail(event.target.value.trim())}
        />
        <div className='password__field__wrapper'>
          <input
            className='password__field'
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            value={password}
            required
            onChange={(event) => setPassword(event.target.value.trim())}
          />
          <img
            src={eyeIcon}
            alt='eye icon'
            className='eye__icon'
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <div className='button__wrapper'>
          <button type='submit' className='signup__button' disabled={loading}>
            {!loading ? 'Sign up' : '...loading'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
