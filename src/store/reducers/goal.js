import { CREATE_GOAL } from '../types';

function createGoal(state = {}, { type, payload }) {
  switch (type) {
    case CREATE_GOAL.SUCCESS:
      return {
        ...state,
        data: payload,
      };
    //   case CREATE_GOAL.ERROR:
    //       return {
    //           ...state,
    //           data:
    //       }
    default:
      return state;
  }
}

export default createGoal;
