import actionCreator from './actionCreator';

const SIGN_UP = actionCreator('SIGN_UP', 'AUTH');
const LOGIN = actionCreator('LOGIN', 'AUTH');
const LOG_OUT = actionCreator('LOGOUT', 'AUTH');
const CREATE_GOAL = actionCreator('CREATE_GOAL', 'GOAL');
const GET_GOAL = actionCreator('GET_GOAL', 'GOAL');
const USER = actionCreator('USER', 'USER');
const PAUSE_GOAL = actionCreator('PAUSE_GOAL', 'GOAL');

export { SIGN_UP, LOGIN, LOG_OUT, CREATE_GOAL, GET_GOAL, USER, PAUSE_GOAL };
