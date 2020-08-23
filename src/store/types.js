import actionCreator from './actionCreator';

const SIGN_UP = actionCreator('SIGN_UP', 'AUTH');
const LOGIN = actionCreator('LOGIN', 'AUTH');
const LOG_OUT = actionCreator('LOGOUT', 'LOGOUT');

export { SIGN_UP, LOGIN, LOG_OUT };
