import axios from '../../utils/axios';
import tokenHelper from '../../utils/auth';

import { SIGN_UP } from '../types';

const signup = (userData) => async (dispatch) => {
  try {
    const {
      data: { payload, status },
    } = await axios.post('/auth/signup', userData);
    tokenHelper.setToken(payload.token);
    dispatch({ type: SIGN_UP.SUCCESS, payload });
    dispatch({ type: SIGN_UP.STATUS, payload: status });
    return { payload, status };
  } catch (error) {
    throw error;
  }
};

export default signup;
