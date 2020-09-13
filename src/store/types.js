import actionCreator from './actionCreator';

const SIGN_UP = actionCreator('SIGN_UP', 'AUTH');
const LOGIN = actionCreator('LOGIN', 'AUTH');
const LOG_OUT = actionCreator('LOGOUT', 'AUTH');
const CREATE_GOAL = actionCreator('CREATE_GOAL', 'GOAL');

export { SIGN_UP, LOGIN, LOG_OUT, CREATE_GOAL };
