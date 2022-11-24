import { ActionTypes } from "../constants/action-types";
const intialState = {
  category: [],
  isLoading: false,
};
export const categoryReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CATEGORY_SUCCESS:
      return { ...state, category: payload };
    default:
      return state;
  }
};