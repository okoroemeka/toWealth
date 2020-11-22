import { toast } from 'react-toastify';
import axios from '../../utils/axios';

import { CREATE_GOAL, GET_GOAL, PAUSE_GOAL, COMPLETE_GOAL } from '../types';

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

export const getAllGoal = (queryParam = '') => async (dispatch) => {
  try {
    const {
      data: { payload },
    } = await axios.get(`/goal?goalQueryParam=${queryParam}`);
    dispatch({ type: GET_GOAL.SUCCESS, payload });

    return payload;
  } catch ({ response: { data: error } }) {
    toast.info(error.message);
    dispatch({ type: GET_GOAL.ERROR, payload: error });
  }
};

export const pauseOrContinueGoal = ({ goalId, paused }) => async (dispatch) => {
  try {
    const {
      data: { payload },
    } = await axios.patch(`/goal/pauseOrContinue/${goalId}`, {
      paused,
    });

    dispatch({ type: PAUSE_GOAL.SUCCESS, payload });
    return payload;
  } catch ({ response: { data: error } }) {
    dispatch({ type: PAUSE_GOAL.ERROR, payload: error });
    throw new error('could not update your goal, please try again later');
  }
};

export const markGoalAsComplete = ({ goalId, completed }) => async (
  dispatch
) => {
  try {
    const {
      data: { payload },
    } = await axios.patch(`/goal/completeGoal/${goalId}`, {
      completed,
    });

    dispatch({ type: COMPLETE_GOAL.SUCCESS, payload });
    return payload;
  } catch ({ response: { data: error } }) {
    dispatch({ type: COMPLETE_GOAL.ERROR, payload: error });
    throw new error('could not update your goal, please try again later');
  }
};

export const getGoal = (goalId) => async () => {
  try {
    const {
      data: { payload },
    } = await axios.get(`/goal/${goalId}`);
    return payload;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const topUpGoal = (goalId, amount) => async () => {
  try {
    const {
      data: { payload },
    } = await axios.patch(`goal/topup/${goalId}`, {
      topUpValue: amount,
    });
    return payload;
  } catch ({ response: { data: error } }) {
    throw error;
  }
};
