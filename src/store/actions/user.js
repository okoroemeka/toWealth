import axios from '../../utils/axios';
import { toast } from 'react-toastify';
import { USER } from '../types';

export const getUser = () => async (dispatch) => {
  try {
    const {
      data: { payload, status },
    } = await axios.get('/auth/user');
    dispatch({ type: USER.SUCCESS, payload });
    dispatch({ type: USER.STATUS, payload: status });
    return payload;
  } catch (error) {
    console.log('error :>> ', error);
    throw error;
  }
};

export const updateUser = (userDetails) => async (dispatch) => {
 try {
   const {
      data: { payload, status },
   } = await axios.patch('/user/profile', userDetails);
    dispatch({ type: USER.SUCCESS, payload });
    dispatch({ type: USER.STATUS, payload: status });
    toast.success('Profile updated successfully');
    return payload;
 } catch (error) {
    throw error;
 }
}

export const changePassword = (userDetails) => async (dispatch) => {
  try {
   const {
      data: { payload},
   } = await axios.patch('/user/passwordUpdate', userDetails);
    toast.success('Password updated successfully');
    return payload;
 } catch (error) {
    throw error;
 }
}
export default getUser;
