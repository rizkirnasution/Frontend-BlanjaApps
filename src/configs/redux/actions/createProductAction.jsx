import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import Swal from "sweetalert2";

const createProduct = (data, saveImage,setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('stock', data.stock)
    formData.append('price', data.price)
    formData.append("photo", saveImage);
    formData.append('descriptions', data.descriptions)
    formData.append('category_id', data.category_id)
    formData.append('transactions_id', data.transactions_id)
    formData.append('merk', data.merk)
    formData.append('condition', data.condition)
    const products = await axios.post(`${process.env.REACT_APP_API_BACKEND}/products`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    console.log(products);
    Swal.fire({
      icon: "success",
      text: (products.data.message),
    });
    setShow(false);
    const result = products.data.data;
    dispatch({ type: ActionTypes.CREATE_PRODUCTS, payload: result });
  } catch (err) {
    console.error(err.message);
    dispatch({type: ActionTypes.GET_PRODUCT_ERROR, payload: err.response})
    Swal.fire({
      icon: "error",
      text: (err.data.message),
    });
    setShow(false);
  }
};

export default createProduct;
