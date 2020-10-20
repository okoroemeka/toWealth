import { LOGIN, LOG_OUT, USER } from '../types';

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
  if (type == USER.SUCCESS) {
    return {
      ...state,
      data: payload
    }
  }
  if (type == LOG_OUT.SUCCESS) return { ...{}, isLoggedIn: false };
  return state;
}

export default login;
