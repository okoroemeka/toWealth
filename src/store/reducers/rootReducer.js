import { combineReducers } from 'redux';

import displayModeReducer from './displayMode';
import signup from './signup';
import login from './login';

const rootReducer = combineReducers({
  darkMode: displayModeReducer,
  signup,
  login,
});

export default rootReducer;
