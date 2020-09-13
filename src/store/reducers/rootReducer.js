import { combineReducers } from 'redux';

import displayModeReducer from './displayMode';
import signup from './signup';
import login from './login';
import goal from './goal';

const rootReducer = combineReducers({
  darkMode: displayModeReducer,
  signup,
  authLogin: login,
  goal,
});

export default rootReducer;
