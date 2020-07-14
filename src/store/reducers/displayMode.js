import { DISPLAY_MODE, LIGHT_MODE } from '../actions/displayMode';

const initialState = {
  darkMode: false,
};

function displayModeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DISPLAY_MODE:
      return { ...state, darkMode: payload };
    case LIGHT_MODE:
      return { ...state, darkMode: payload };
    default:
      return state;
  }
}

export default displayModeReducer;
