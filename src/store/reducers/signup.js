import { SIGN_UP, LOG_OUT } from '../types';

function signup(state = {}, { type, payload }) {
  if (type == SIGN_UP.SUCCESS) {
    return {
      ...state,
      data: payload,
      isLoggedIn: true,
    };
  }
  if (type == SIGN_UP.STATUS) {
    return {
      ...state,
      Status: payload,
    };
  }
  if (type == SIGN_UP.ERROR) {
    return {
      ...state,
      Status: payload,
    };
  }
  if (type == LOG_OUT.SUCCESS) {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  return state;
}

export default signup;
