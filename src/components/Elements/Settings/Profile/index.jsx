import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import editIcon from '../../../../assets/images/editIcon.svg';
import lock from '../../../../assets/images/Lock.svg';
import user from '../../../../assets/images/userAvatar.svg';
import EditProfile from './EditProifle';
import ChangePassword from './ChangePassword/ChangePassword';
import getUser from "../../../../store/actions/user";
import './profile.scss';

const Profile = (props) => {
  const [isEditProfile, setIsEditProfile] = useState(true);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [userDetails, setUserDetail] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const {
    authLogin,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const toggleEditForm = () => {
    setIsEditProfile(true);
    setIsChangePassword(false);
  };

  const toggleChangePassword = () => {
    setIsEditProfile(false);
    setIsChangePassword(true);
  };

  const handleImageUpload = async(e) =>{
    const files = e.target.files;
    const data = new FormData();

    data.append('file', files[0]);
    data.append('upload_preset', 'to-wealth');
    const { data: newdata } = await axios.post(
      `https://api.cloudinary.com/v1_1/dejndvrjd/upload`,
      data
    );
    setImageUrl(newdata.secure_url);
  }

  useEffect(() => {
    async function getUserDetails() {
      const details = await dispatch(getUser());
      setUserDetail(details);
    }
    getUserDetails()
  }, [dispatch]);

  useEffect(() => {
    if (userDetails) {
      setImageUrl(userDetails.image)
    }
  }, [userDetails]);

  return (
    <div className='edit__profile'>
      <div className='col-l-10'>
        <div className='profile__image__area'>
          <div className='image__input'>
            <label htmlFor='file-upload' className='image__label'>
              <img src={editIcon} alt='edit icon' className='image'/>
              <div className='shadow'></div>
            </label>
            <input type='file' className='file__input' id='file-upload' onChange={handleImageUpload}></input>
          </div>
          <div className='image__container'>
            <img src={imageUrl||user} alt='avater' className='user__averta' />
          </div>
          <div className='user__details__area'>
            <h6 className='user__name'>{authLogin?.data?.fullname?.split(' ').map(name=>name[0].toUpperCase() + name.slice(1)).join(' ')}</h6>
            <h6 className='user__position'>{authLogin?.data?.position?.split(' ').map(name=>name[0].toUpperCase() + name.slice(1)).join(' ')}</h6>
          </div>
        </div>
        <div className='user__settings__area'>
          <div className='col-l-3 user__nav__settings'>
            <div
              className='settings__nav__item'
              onClick={() => toggleEditForm()}
            >
              <div className='edit__label__profile'>
                <img src={editIcon} alt='edit icon' className='image' />
                <div className='shadow'></div>
              </div>
              <h5
                className='edit__profile__text'
                style={{
                  color: !isEditProfile ? '#66788A' : null,
                }}
              >
                Edit Profile
              </h5>
            </div>
            <div
              className='settings__nav__item'
              onClick={() => toggleChangePassword()}
            >
              <div className='edit__label__profile'>
                <img src={lock} alt='edit icon' className='password__icon' />
              </div>
              <h5
                className='edit__profile__password'
                style={{
                  color: !isChangePassword ? '#66788A' : null,
                }}
              >
                Password
              </h5>
            </div>
          </div>
          <div className='col-l-7 form__area'>
            <div className='form__wrapper'>
              {isEditProfile ? <EditProfile userData={userDetails} imageUrl={imageUrl} /> : null}
              {isChangePassword ? <ChangePassword /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
