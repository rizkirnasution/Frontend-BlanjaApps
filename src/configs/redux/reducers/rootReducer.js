import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
// import { UpdateUserReducer } from "./userReducer";
import {
  productsReducer,
  CreateproductsReducer,
  selectedProductsReducer,
  DeleteProductsReducer,
  UpdateProductsReducer,
  productReducer,
  dataProducts,
} from "./productsReducer";
import { cartReducer, todosReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import bagReducer from "./bagReducer";
const rootReducer = combineReducers({
  auth: userReducer,
  Createproducts: CreateproductsReducer,
  allProducts: productsReducer,
  dataProduct: dataProducts,
  products: productReducer,
  carts: cartReducer,
  todo: todosReducer,
  deleteProduct: DeleteProductsReducer,
  product: selectedProductsReducer,
  updateProduct: UpdateProductsReducer,
  getCategory: categoryReducer,
  bag: bagReducer,
});

export default rootReducer