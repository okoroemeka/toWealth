import axios from '../../utils/axios';
import tokenHelper from '../../utils/auth';

import { USER } from '../types';

const login = () => async (dispatch) => {
  try {
    const {
      data: { payload, status },
    } = await axios.get('/auth/user');
    dispatch({ type: USER.SUCCESS, payload });
    dispatch({ type: USER.STATUS, payload: status });
    return payload;
  } catch ({ response: { data: error } }) {
    throw error;
  }
};

export default login;
