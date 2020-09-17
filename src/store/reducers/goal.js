import { CREATE_GOAL } from '../types';

function createGoal(state = {}, { type, payload }) {
  switch (type) {
    case CREATE_GOAL.SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}

export default createGoal;
