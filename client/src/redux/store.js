import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "./slices/product";
const reducer = combineReducers({
  products,
});

export default configureStore({
  reducer,
});
