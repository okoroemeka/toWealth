import React, { useState } from 'react';
import eyeIcon from '../../../assets/images/eye.svg';
import './login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='login__form__wrapper'>
      <form className='login__form'>
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

        <div className='forgot__password__wrapper'>
          <span className='forgot__password' onClick={() => {}}>
            Forgot your password?
          </span>
        </div>
        <div className='button__wrapper'>
          <button type='submit' className='login__button'>
            Login
          </button>
        </div>
      </form>
      <div className='no__account__wrapper'>
        <h5 className='no__account__text'>Don’t have an account?</h5>
        <h5 className='no__account__signup' onClick={() => {}}>
          Sign Up
        </h5>
      </div>
    </div>
  );
};

export default Login;
