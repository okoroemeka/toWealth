import { SIGN_UP } from '../types';

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
  return state;
}

export default signup;
