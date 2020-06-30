import React, { useState } from 'react';
import eyeIcon from '../../../assets/images/eye.svg';
import './index.scss';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='signup__form__wrapper'>
      <form className='signup__form'>
        <input
          type='text'
          value={name}
          placeholder='Name'
          required
          onChange={(event) => setName(event.target.value.trim())}
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
          <button type='submit' className='signup__button'>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
