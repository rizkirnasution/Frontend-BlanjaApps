const initialState = {
  product: [],
};

const checkoutReducer = (state = initialState, action) => {
  if (action.type === "ADD_CHECKOUT") {
    return {
      product: action.payload,
    };
  }
};

export default checkoutReducer;
