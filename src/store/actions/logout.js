import tokenHelper from '../../utils/auth';
import { LOG_OUT } from '../types';

const logout = () => (dispatch) => {
  tokenHelper.removeToken();
  dispatch({ type: LOG_OUT.SUCCESS });
};

export default logout;
