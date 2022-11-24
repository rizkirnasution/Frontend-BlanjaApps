import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  isLoading : false
};

const inisial = {
  products: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  error: null,
};


export const CreateproductsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CREATE_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const DeleteProductsReducer = (state = intialState, {type,payload}) => {
  switch (type) {
    case ActionTypes.DELETE_PRODUCTS:
      // console.log(payload.data.data);
      return { ...state, products: payload.data.data };
    default:
      return state;
  }
};
export const UpdateProductsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_PRODUCTS:
      return { ...state, products : payload.data.data };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const dataProducts = (state = inisial, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PAGE:
      return { ...state, pagination: action.payload };
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
export const productReducer = (state = inisial, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }
    case ActionTypes.GET_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};