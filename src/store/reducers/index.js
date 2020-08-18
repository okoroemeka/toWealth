import { applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { saveState, loadState } from '../../utils/persistState';
import rootReducer from './rootReducer';

const persisitedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persisitedState,
  composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
  saveState({
    authLogin: store.getState().authLogin,
  });
});

export default store;
