import { combineReducers } from 'redux';

import displayModeReducer from './displayMode';
import signup from './signup';
import login from './login';
import goal from './goal';
import goals from './getGoals';

const rootReducer = combineReducers({
  darkMode: displayModeReducer,
  signup,
  authLogin: login,
  goal,
  goals,
});

export default rootReducer;
