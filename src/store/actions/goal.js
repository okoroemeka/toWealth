import axios from '../../utils/axios';

import { CREATE_GOAL } from '../types';

const goal = (goalParameter) => async (dispatch) => {
  try {
    const {
      data: { payload },
    } = await axios.post('/goal', goalParameter);
    dispatch({ type: CREATE_GOAL.SUCCESS, payload });
  } catch ({ response: { data: error } }) {
    throw error;
  }
};

export default goal;
