import React from 'react';
import './auth.scss';
import logo from '../../../assets/images/logo.svg';
import googleIcon from '../../../assets/images/googleIcon.svg';
import facebookIcon from '../../../assets/images/facebookIcon.svg';
import Card from '../../UI/Card';
import Login from '../../Elements/Login';
import SignUp from '../../Elements/SignUp';

const Auth = () => {
  const [activeAuth, setActiveAuth] = React.useState(false);
  return (
    <div className='row auth__custom__container'>
      <div className='col-sm-12 col-l-12 auth__custom'>
        <div className='row form__wrapper'>
          <div className='col-sm-12 col-l-3 form__contianer'>
            <div className='header'>
              <img src={logo} alt='logo' className='logo__image' />
              <h3>toWealth</h3>
            </div>
            <Card classname='auth__card'>
              <div className='card__header'>
                <div
                  className={`register ${activeAuth ? 'active__auth' : ''}`}
                  onClick={() => setActiveAuth(true)}
                >
                  <h5>Register</h5>
                </div>
                <div
                  className={`login ${!activeAuth ? 'active__auth' : ''}`}
                  onClick={() => setActiveAuth(false)}
                >
                  <h5>Login</h5>
                </div>
              </div>
              <div className='social__auth__wrapper'>
                <button type='submit' className='google__button'>
                  <img
                    src={googleIcon}
                    alt='google icon'
                    className='google__icon'
                  />
                  google
                </button>
                <button type='submit' className='facebook__button'>
                  <img
                    src={facebookIcon}
                    alt='facebook icon'
                    className='facebook__icon'
                  />
                  facebook
                </button>
              </div>
              <div className='alt__auth__wrapper'>
                <div className='hr' />
                <h4 className='or'>OR</h4>
                <div className='hr' />
              </div>
              {!activeAuth ? <Login /> : <SignUp />}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
