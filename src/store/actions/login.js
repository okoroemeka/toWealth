import axios from '../../utils/axios';
import tokenHelper from '../../utils/auth';

import { LOGIN } from '../types';

const login = (userData) => async (dispatch) => {
  try {
    const {
      data: { payload, status },
    } = await axios.post('/auth/login', userData);
    tokenHelper.setToken(payload.token);
    dispatch({ type: LOGIN.SUCCESS, payload });
    dispatch({ type: LOGIN.STATUS, payload: status });
  } catch (error) {
    throw error;
  }
};

export default login;
