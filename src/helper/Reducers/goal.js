export const goalTypes = {
  addGoal: 'ADD_GOAL_INPUT',
  editGoal: 'EDIT_GOAL_INPUT',
  selectColor: 'SELECT_COLOR',
};

export function chooseColorReducer(state = [], { type, payload }) {
  switch (type) {
    case goalTypes.selectColor:
      return state.map((colorItem) => {
        if (colorItem.colorId == payload.colorId) {
          colorItem.active = true;
        } else {
          colorItem.active = false;
        }
        return colorItem;
      });
    default:
      return state;
  }
}

export function formReducer(state = {}, { type, payload }) {
  switch (type) {
    case goalTypes.addGoal:
      return {
        ...state,
        [payload.name]: payload.value,
      };

    case goalTypes.editGoal:
      return {
        ...state,
        [payload.name]: payload.value,
      };

    default:
      return state;
  }
}
