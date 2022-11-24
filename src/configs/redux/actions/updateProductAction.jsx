import axios from "axios";
import Swal from "sweetalert2";
const updateProduct = (data, id,saveImage,setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name)
        formData.append("stock", data.stock)
        formData.append("price", data.price)
        formData.append("photo", saveImage)
        formData.append("descriptions", data.descriptions)
        formData.append("category_id", data.category_id)
        formData.append("transactions_id", data.transactions_id);
        formData.append("merk", data.merk)
        formData.append("condition", data.condition)
    const products = await axios.put(`${process.env.REACT_APP_API_BACKEND}/products/${id}`, formData ,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    
    console.log(products);
    Swal.fire({
      icon: "success",
     //  title: "Register is Success!",
      text: (products.data.message),

    });
    setShow(false);
    const result = products.data.data;

    window.location.reload(false)

    dispatch({ type: "UPDATE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
    Swal.fire({
      icon: "error",
     //  title: "Register is Success!",
      text: (err.data.message),
    });
    setShow(false);
  }
};

export default updateProduct;
