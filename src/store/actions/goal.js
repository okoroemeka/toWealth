import { toast } from 'react-toastify';
import axios from '../../utils/axios';

import { CREATE_GOAL, GET_GOAL } from '../types';

export const goal = (goalParameter) => async (dispatch) => {
  try {
    const {
      data: { payload },
    } = await axios.post('/goal', goalParameter);
    dispatch({ type: CREATE_GOAL.SUCCESS, payload });
    toast.success('Goal created successfully');
  } catch ({ response: { data: error } }) {
    toast.error('An error occured');
    throw error;
  }
};

export const getAllGoal = () => async (dispatch) => {
  try {
    const {
      data: { payload },
    } = await axios.get('/goal');
    dispatch({ type: GET_GOAL.SUCCESS, payload });
    return payload;
  } catch ({ response: { data: error } }) {
    toast.info(error.message);
    dispatch({ type: GET_GOAL.ERROR, payload: error });
  }
};
