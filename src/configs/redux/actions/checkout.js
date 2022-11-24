export const addCheckout = (product) => {
  return {
    type: "ADD_CHECKOUT",
    payload: product,
  };
};
