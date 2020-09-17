import { GET_GOAL } from '../types';

function getGoals(state = [], { type, payload }) {
  switch (type) {
    case GET_GOAL.SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}

export default getGoals;
