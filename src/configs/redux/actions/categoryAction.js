import axios from "axios"
import {ActionTypes} from "../constants/action-types"
export const getCategory =
  () =>
  async (dispacth) => {
    try {
      dispacth({ type: ActionTypes.GET_CATEGORY_PENDING });
      const data  = await axios
        .get(`${process.env.REACT_APP_API_BACKEND}/category`)
        console.log(data)
      dispacth({
        type: ActionTypes.GET_CATEGORY_SUCCESS,
        payload: data.data.data,
      });
    } catch (error) {
      dispacth({
        type: ActionTypes.GET_CATEGORY_ERROR,
        payload: error.response,
      });
    }
    };

    export const getCategorys = () => async (dispatch) => {
      dispatch({ type: ActionTypes.GET_CATEGORY_PENDING });
      const data = await axios
        .get(`${process.env.REACT_APP_API_BACKEND}/category`)
        .catch((err) => {
          console.log(err);
        });
      console.log(data);
      dispatch({ type: ActionTypes.GET_CATEGORY_SUCCESS, payload: data });
    };

    export const getCategoryss = (category) => {
      return {
        type: ActionTypes.GET_CATEGORY_SUCCESS,
        payload: category,
      };
    };