export const DISPLAY_MODE = 'DISPLAY_MODE';
export const LIGHT_MODE = 'LIGHT_MODE';

export const darkMode = (payload) => (dispatch) => {
  return dispatch({ type: DISPLAY_MODE, payload });
};
export const lightMode = (payload) => (dispatch) => {
  return dispatch({ type: LIGHT_MODE, payload });
};
