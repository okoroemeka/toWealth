import { LOGIN } from '../types';

function login(state = {}, { type, payload }) {
  if (type == LOGIN.SUCCESS) {
    return {
      ...state,
      data: payload,
      isLoggedIn: true,
    };
  }
  if (type == LOGIN.STATUS) {
    return {
      ...state,
      Status: payload,
    };
  }
  return state;
}

export default login;
