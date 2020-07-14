import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import displayModeReducer from './displayMode';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  darkMode: displayModeReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
