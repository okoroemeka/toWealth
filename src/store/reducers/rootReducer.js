import { combineReducers } from 'redux';

import displayModeReducer from './displayMode';
import signup from './signup';

const rootReducer = combineReducers({
  darkMode: displayModeReducer,
  signup,
});

export default rootReducer;
