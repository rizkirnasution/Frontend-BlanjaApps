import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import axio from "../../axios";
import { useNavigate } from "react-router-dom";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const getProduct =
  ({ page, limit, search, sort }) =>
  async (dispacth) => {
    try {
      const navigate = useNavigate();
      dispacth({ type: ActionTypes.GET_PRODUCT_PENDING });
      const { data } = await axio({
        url: `/products/pagination?page=${page}&limit=${limit}${
          search ? "&search=" + search : ""
        }${sort ? "&sort=" + sort : ""}`,
        method: "GET",
      });

      dispacth({
        type: ActionTypes.GET_PRODUCT_SUCCESS,
        payload: { data: data.data, pagination: data.pagination },
      });
      navigate("/productList");
    } catch (error) {
      dispacth({
        type: ActionTypes.GET_PRODUCT_ERROR,
        payload: error.response,
      });
    }
  };

export const setDataProduct = (page, type) => (dispacth) => {
  axios
    .get(
      `${process.env.REACT_APP_API_BACKEND}products?page=${page}&type=${type}`
    )
    .then((result) => {
      const response = result.data.data;
      dispacth({ type: ActionTypes.SET_PRODUCTS, payload: response });
      const pagination = result.data.pagination;
      // console.log(paginate);
      dispacth({ type: ActionTypes.UPDATE_PAGE, payload: pagination });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const updateProduct = (product) => {
  return {
    type: ActionTypes.UPDATE_PRODUCTS,
    payload: product,
  };
};

export const getDetail = (id) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCT_PENDING" });
  const data = await axios
    .get(`http://localhost:8080/products/${id}`)
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  // return {
  //     type: 'ADD_TODO',
  //     payload: result
  // }
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: data });
};

export const createProduct = (data, navigate) => async (dispacth) => {
  try {
    dispacth({ type: ActionTypes.ADD_PRODUCTS_PENDING });
    const token = localStorage.getItem("token");
    const createdAt = await axios.post(
      `http://localhost:8080/products`,
      data,
      {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    navigate("/productlist");
    dispacth({ type: ActionTypes.CREATE_PRODUCTS, payload: createdAt });
  } catch (error) {
    dispacth({ type: ActionTypes.GET_PRODUCT_ERROR, payload: error.response });
  }
};

export const deleteProduct = (product) => {
  return {
    type: ActionTypes.DELETE_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
