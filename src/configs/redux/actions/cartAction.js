import axios from "axios"
import { ActionTypes } from "../constants/action-types";

export const cartAction = (id) => async (dispatch) => {
  dispatch({ type: "ADD_TODO_PENDING" });
  const data = await axios
    .get(`${process.env.REACT_APP_API_BACKEND}/products/${id}`)
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  dispatch({ type: ActionTypes.ADD_BAG, payload: data });
};

export const addTodolist = (data) => async (dispatch) => {
  dispatch({ type: "ADD_TODO_PENDING" });
  const result = {
    data,
  };
  dispatch({ type: "ADD_TODO_SUCCESS", payload: result });
};